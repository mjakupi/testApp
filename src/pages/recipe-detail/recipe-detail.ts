import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventData } from '../../providers/event-data';

import {Camera, SocialSharing} from "ionic-native";
import {Storage} from "@ionic/storage";
import {PhotoProvider} from "../../providers/photo-provider";

@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})

export class RecipeDetailPage {

  currentRecipe:any;
  image:string;
  recipePicture: any = null;
  currentUser;
    firebaseImages:any;
    assetCollection:any;
    constructor(public nav:NavController, public navParams:NavParams, public photo:PhotoProvider,public storage: Storage,public eventData:EventData) {
    this.navParams = navParams;

    this.eventData.getRecipeDetail(this.navParams.get('eventId')).on('value', (snapshot) => {
      this.currentRecipe = snapshot.val();
    });
  }

  facebookShare(){
    SocialSharing.shareViaFacebook(this.currentRecipe, "http://placehold.it/300x100",null);
  }

    addPic() {
        this.eventData.addPicture( this.currentRecipe.id ,this.recipePicture).then(() => {
            this.recipePicture = null;
        });
    }
    loadData() {
        // load data from firebase...
        firebase.database().ref('assets').on('value', (_snapshot: any) => {
            var result = [];

            _snapshot.forEach((_childSnapshot) => {
                // get the key/id and the data for display
                var element = _childSnapshot.val();
                element.id = _childSnapshot.key;

                //result.push(element);
                this.firebaseImages.push(element);
            });

            // set the component property
            this.assetCollection = result;
            console.log(result);

        });
    }
    takePicture(){
        //noinspection TypeScriptUnresolvedVariable
        Camera.getPicture({
            quality : 95,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.PNG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: true
        }).then(imageData => {
            this.recipePicture = imageData;
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }



}