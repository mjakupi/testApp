import { Injectable } from '@angular/core';
import firebase from 'firebase';


declare var window: any;
@Injectable()
export class EventData {
  public currentUser: any;
  public eventList: any;
  public profilePictureRef: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.eventList = firebase.database().ref('userProfile/' + this.currentUser + '/eventList');
    this.profilePictureRef = firebase.storage().ref('/userProfile/'+ this.currentUser + '/eventList');

  }

  removeEvent(eventId){
    let adaRef = firebase.database().ref('userProfile/' + this.currentUser + '/eventList');
    adaRef.child(eventId).remove()
        .then(function() {
          console.log("Remove succeeded.")
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
  }



  getEventList(): any {
    return this.eventList;
  }


  getEventDetail(eventId): any {
    return this.eventList.child(eventId);
  }

  getPicDetail(eventId): any{
      return this.profilePictureRef.child(eventId);
  }

  createEvent(recipeName: string, ingredients: string, calories:string,preparation: string): any {
    return this.eventList.push({
      name: recipeName,
      ingredients:ingredients,
      calories:calories,
      preparation:preparation,
    }).then( newEvent => {
      this.eventList.child(newEvent.key).child('id').set(newEvent.key);
    });
  }
  addPicture( eventId, guestPicture = null): any {
    return this.eventList.child(eventId).child('PictureList').push({

    }).then((newPicture) => {
      this.eventList.child(eventId).transaction( (event) => {
        return event;
      });
      if (guestPicture != null) {
        this.profilePictureRef.child(newPicture.key).child('recipePicture.png')
            .putString(guestPicture, 'base64', {contentType: 'image/png'})
            .then((savedPicture) => {
              this.eventList.child(eventId).child('PictureList').child(newPicture.key).child('recipePicture')
                  .set(savedPicture.downloadURL);
            });
      }
    });
  }

}
