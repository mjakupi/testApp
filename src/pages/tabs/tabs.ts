import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import firebase from 'firebase';
import {RecipeListPage} from "../recipe-list/recipe-list";
import {RecipeCreatePage} from "../recipe-create/recipe-create";
import {EventData} from "../../providers/event-data";
import {AlertController, NavController} from "ionic-angular/index";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RecipeListPage;

  constructor(private alertCtrl: AlertController,public nav:NavController,public eventData:EventData,
  ) {

  }



}
