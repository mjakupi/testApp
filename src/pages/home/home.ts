import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import {FbLoginPage} from "../fb-login/fb-login";
import {RecipeCreatePage} from "../recipe-create/recipe-create";
import {RecipeListPage} from "../recipe-list/recipe-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  goToProfile(){
    this.nav.push(ProfilePage);
  }

  goToCreate(){
    this.nav.push(RecipeCreatePage);
  }

  goToList(){
    this.nav.push(RecipeListPage);
  }

  login()
  {
    this.nav.push(FbLoginPage);
  }


  goToCreateRecipe(){
    this.nav.push(RecipeCreatePage);
  }

}
