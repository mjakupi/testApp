import { Component, NgZone,ViewChild } from '@angular/core';
import {Nav ,Platform } from 'ionic-angular';
import {StatusBar, NativeStorage, Splashscreen} from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';
import {TabsPage} from "../pages/tabs/tabs";


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;
  zone: NgZone;
    @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform) {
    this.zone = new NgZone({});
    firebase.initializeApp({
      apiKey: "AIzaSyCXgI_g55AS1w3EtrCPY4KUaxR9BQlO41k",
      authDomain: "ionic2recipe.firebaseapp.com",
      databaseURL: "https://ionic2recipe.firebaseio.com",
      storageBucket: "ionic2recipe.appspot.com",
      messagingSenderId: "122159437186",
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
        } else { 
          this.rootPage = TabsPage;
        }
      });     
    });

            //noinspection TypeScriptUnresolvedFunction
            platform.ready().then(() => {

                    //we don't have the user data so we will ask him to log in
                    Splashscreen.hide();
                    StatusBar.styleDefault();
                  });

  }
}