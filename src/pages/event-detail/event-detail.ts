import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventData } from '../../providers/event-data';

import {Camera, SocialSharing} from "ionic-native";
import {Storage} from "@ionic/storage";
import {PhotoProvider} from "../../providers/photo-provider";

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})

export class EventDetailPage {

  currentEvent:any;
  currentPic:any;
  image:string;
  recipePicture: any = null;
  currentUser;
    constructor(public nav:NavController, public navParams:NavParams, public photo:PhotoProvider,public storage: Storage,public eventData:EventData) {
    this.navParams = navParams;

    this.eventData.getEventDetail(this.navParams.get('eventId')).on('value', (snapshot) => {
      this.currentEvent = snapshot.val();
    });
  }

  facebookShare(){
    SocialSharing.shareViaFacebook(this.currentEvent, "http://placehold.it/300x100",null);
  }


    addPic() {
        this.eventData.addPicture( this.currentEvent.id ,this.recipePicture).then(() => {
            this.recipePicture = null;
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