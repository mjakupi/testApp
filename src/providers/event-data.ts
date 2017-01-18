import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Platform} from "ionic-angular/index";


declare var window: any;
@Injectable()
export class EventData {
  public currentUser: any;
  public recipeList: any;
  public profilePictureRef: any;
  public recipePicture:any;
    public assetCollection:any;
  constructor(public  platform:Platform) {
    this.currentUser = firebase.auth().currentUser.uid;
    this.recipeList = firebase.database().ref('userProfile/' + this.currentUser + '/eventList');
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

  getRecipeList(): any {
    return this.recipeList;
  }


  getRecipeDetail(eventId): any {
    return this.recipeList.child(eventId);
  }

  getPicDetail(eventId): any{
      return this.profilePictureRef.child(eventId);
  }

  createRecipe(recipeName: string, ingredients: string, calories:number,preparation: string): any {
    return this.recipeList.push({
      name: recipeName,
      ingredients:ingredients,
      calories:calories,
      preparation:preparation,
    }).then( newEvent => {
      this.recipeList.child(newEvent.key).child('id').set(newEvent.key);
    });
  }
  addPicture( eventId, guestPicture = null): any {
    return this.recipeList.child(eventId).child('PictureList').push({

    }).then((newPicture) => {
      this.recipeList.child(eventId).transaction( (event) => {
        return event;
      });
      if (guestPicture != null) {
        this.profilePictureRef.child(newPicture.key).child('recipePicture.png')
            .putString(guestPicture, 'base64', {contentType: 'image/png'})
            .then((savedPicture) => {
              this.recipeList.child(eventId).child('PictureList').child(newPicture.key).child('recipePicture')
                  .set(savedPicture.downloadURL);
            });
      }
    });
  }



}
