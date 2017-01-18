import { Component } from '@angular/core';
import {NavController, ActionSheetController, AlertController} from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';
import { EventData } from '../../providers/event-data';


@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
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

      this.eventData.getEventList().on('value', snapshot => {
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

  goToEventDetail(eventId){
    this.nav.push(EventDetailPage, {
      eventId: eventId,
    });
  }
}