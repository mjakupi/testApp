import { Component } from '@angular/core';
import {NavController, ActionSheetController, AlertController, LoadingController} from 'ionic-angular';
import { EventData } from '../../providers/event-data';
import {RecipeDetailPage} from "../recipe-detail/recipe-detail";


@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class  RecipeListPage {
  public eventList: any;
  loading:any;
  eventId:any;

  constructor(public nav: NavController,public loadingCtrl: LoadingController,
              public eventData: EventData,
              public alertCtrl: AlertController
      ,public actionSheetCtrl: ActionSheetController) {
      this.nav = nav;
    this.eventData = eventData;
        this.showLoader();
      this.eventData.getRecipeList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          name: snap.val().name,
          ingredients: snap.val().ingredients,
          calories: snap.val().calories,
          preparation: snap.val().preparation,

      });
      });
      this.eventList = rawList;
        this.loading.dismiss();

      });

  }

    remove(eventId){
        this.presentAlert();
      this.eventData.removeEvent(eventId);

    }

  goToRecipeDetail(eventId){
    this.nav.push(RecipeDetailPage, {
      eventId: eventId,
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Recipe Deleted',
      buttons: ['OK']
    });
    alert.present();
  }
  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    this.loading.present();

  }
}