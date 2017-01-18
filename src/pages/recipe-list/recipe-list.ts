import { Component } from '@angular/core';
import {NavController, ActionSheetController, AlertController} from 'ionic-angular';
import { EventData } from '../../providers/event-data';
import {RecipeDetailPage} from "../recipe-detail/recipe-detail";


@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html',
})
export class  RecipeListPage {
  public eventList: any;
    public images = [{
        "one": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjcxNGU3ZTUtMDczNy00ZThiLWI4NmYtMDJkY2Q4YTU2ZjA5XkEyXkFqcGdeQXVyNjM1MTQ0NTQ@._V1_SY1000_CR0,0,660,1000_AL_.jpg",
        "two": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWeXFHNnDiEsIxIjf27d1yNzEfS8tzT7z7aon4xSZIIjVRBlGN",
        "three": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjcxNGU3ZTUtMDczNy00ZThiLWI4NmYtMDJkY2Q4YTU2ZjA5XkEyXkFqcGdeQXVyNjM1MTQ0NTQ@._V1_SY1000_CR0,0,660,1000_AL_.jpg",
        "four": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjcxNGU3ZTUtMDczNy00ZThiLWI4NmYtMDJkY2Q4YTU2ZjA5XkEyXkFqcGdeQXVyNjM1MTQ0NTQ@._V1_SY1000_CR0,0,660,1000_AL_.jpg",
    }
    ];
  constructor(public nav: NavController, public eventData: EventData, public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController) {
      this.nav = nav;
    this.eventData = eventData;

      this.eventData.getRecipeList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          name: snap.val().name,
          ingredients: snap.val().ingredients,
          preparation: snap.val().preparation,
          calories: snap.val().calories,

      });
      });
      this.eventList = rawList;
    });
  }

    remove(eventId){
        this.eventData.removeEvent(eventId);
    }

  goToRecipeDetail(eventId){
    this.nav.push(RecipeDetailPage, {
      eventId: eventId,
    });
  }
}