import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { EventData } from '../../providers/event-data';
import {Camera, SocialSharing} from "ionic-native";
import {PhotoProvider} from "../../providers/photo-provider";



@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {
  images: any = {};
  theImage: string;
  constructor(public nav: NavController,
              public eventData: EventData,
              public  photo: PhotoProvider,
              public  platform:Platform) {
    this.nav = nav;
    this.eventData = eventData;
  }

  ionViewDidLoad() {
    console.log('Hello GalleryPage Page');
  }

  createEvent(recipeName: string, ingredients: string, calories:string,preparation: string ) {
    this.eventData.createEvent(recipeName, ingredients,calories,preparation).then( () => {
      this.nav.pop();
    });
  }


}
