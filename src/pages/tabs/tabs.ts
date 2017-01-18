import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import firebase from 'firebase';
import {RecipeListPage} from "../recipe-list/recipe-list";
import {RecipeCreatePage} from "../recipe-create/recipe-create";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RecipeListPage;
  tab3Root: any=  RecipeCreatePage;


  constructor() {

  }
}
