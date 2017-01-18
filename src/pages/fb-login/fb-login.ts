import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../login/login";


/*
  Generated class for the FbLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fb-login',
  templateUrl: 'fb-login.html'
})
export class FbLoginPage {
  userProfile: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FbLoginPage');
  }
    /*
    FBLogin(){
        let permissions = new Array();
        let nav = this.navCtrl;
        //the permissions your facebook app needs from the user
        permissions = ["public_profile"];


        Facebook.login(permissions)
            .then(function(response){
                let userId = response.authResponse.userID;
                let params = new Array();

                //Getting name and gender properties
                Facebook.api("/me?fields=name,gender", params)
                    .then(function(user) {
                        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                        //now we have the users info, let's save it in the NativeStorage
                        NativeStorage.setItem('user',
                            {
                                name: user.name,
                                gender: user.gender,
                                picture: user.picture
                            })
                            .then(function(){
                                nav.push(TabsPage);
                            }, function (error) {
                                console.log(error);
                            })
                    })
            }, function(error){
                console.log(error);
            });
    }
     logout() {
     let nav = this.navCtrl;

     Facebook.logout().then((user) =>{
     alert(JSON.stringify(user));
     nav.push(LoginPage);

     }, (error) => {
     alert(error);
     })
     }


     */



}
