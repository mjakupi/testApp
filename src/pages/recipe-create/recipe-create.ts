import { Component } from '@angular/core';
import {NavController, Platform, AlertController} from 'ionic-angular';
import { EventData } from '../../providers/event-data';
import {Camera, SocialSharing} from "ionic-native";
import {PhotoProvider} from "../../providers/photo-provider";
import * as firebase from 'firebase';


declare var window: any;

@Component({
  selector: 'page-recipe-create',
  templateUrl: 'recipe-create.html',
})
export class RecipeCreatePage {
    images:any = {};
    recipePicture:any;
    currentRecipe:any;
    assetCollection:any;

    constructor(public nav:NavController,
                public eventData:EventData,
                public  photo:PhotoProvider,
                public  platform:Platform,
                private alertCtrl: AlertController) {
        this.nav = nav;
        this.eventData = eventData;
    }

    ionViewDidLoad() {
        console.log('Hello GalleryPage Page');
    }

    createRecipe(recipeName:string, ingredients:string, calories:number, preparation:string) {
        this.eventData.createRecipe(recipeName, ingredients, calories, preparation).then(() => {
            this.presentAlert();
            this.nav.pop();

        });
    }


    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Recipe Created',
            subTitle: 'Well done',
            buttons: ['OK']
        });
        alert.present();
    }

    makeFileIntoBlob(_imagePath) {

        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        if (this.platform.is('android')) {
            return new Promise((resolve, reject) => {
                window.resolveLocalFileSystemURL(_imagePath, (fileEntry) => {

                    fileEntry.file((resFile) => {

                        var reader = new FileReader();
                        reader.onloadend = (evt:any) => {
                            var imgBlob:any = new Blob([evt.target.result], {type: 'image/jpeg'});
                            imgBlob.name = 'sample.jpg';
                            resolve(imgBlob);
                        };

                        reader.onerror = (e) => {
                            console.log('Failed file read: ' + e.toString());
                            reject(e);
                        };

                        reader.readAsArrayBuffer(resFile);
                    });
                });
            });
        }
    }

    uploadToFirebase(_imageBlob) {
        var fileName = 'sample-' + new Date().getTime() + '.jpg';

        return new Promise((resolve, reject) => {
            var fileRef = firebase.storage().ref('images/' + fileName);

            var uploadTask = fileRef.put(_imageBlob);

            uploadTask.on('state_changed', (_snapshot) => {
                console.log('snapshot progess ' + _snapshot);
            }, (_error) => {
                reject(_error);
            }, () => {
                // completion...
                resolve(uploadTask.snapshot);
            });
        });
    }

    saveToDatabaseAssetList(_uploadSnapshot) {
        var ref = firebase.database().ref('assets');

        return new Promise((resolve, reject) => {

            // we will save meta data of image in database
            var dataToSave = {
                'URL': _uploadSnapshot.downloadURL, // url to access file
                'name': _uploadSnapshot.metadata.name, // name of the file
                'owner': firebase.auth().currentUser.uid,
                'email': firebase.auth().currentUser.email,
                'lastUpdated': new Date().getTime(),
            };

            ref.push(dataToSave, (_response) => {
                resolve(_response);
            }).catch((_error) => {
                reject(_error);
            });
        });

    }



    doGetPicture() {
        // TODO:
        // get picture from camera
        //noinspection TypeScriptUnresolvedVariable
        Camera.getPicture({
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            targetHeight: 640,
            correctOrientation: true
        }).then((_imagePath) => {
            alert('got image path ' + _imagePath);
            // convert picture to blob
            return this.makeFileIntoBlob(_imagePath);
        }).then((_imageBlob) => {
            alert('got image blob ' + _imageBlob);

            // upload the blob
            return this.uploadToFirebase(_imageBlob);
        }).then((_uploadSnapshot: any) => {
            alert('file uploaded successfully  ' + _uploadSnapshot.downloadURL);

            // store reference to storage in database
            return this.saveToDatabaseAssetList(_uploadSnapshot);

        }).then((_uploadSnapshot: any) => {
            alert('file saved to asset catalog successfully  ');
        }, (_error) => {
            alert('Error ' + _error.message);
        });



    }





}