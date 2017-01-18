import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {EventCreatePage} from "../event-create/event-create";
import {EventListPage} from "../event-list/event-list";
import firebase from 'firebase';
import {FbLoginPage} from "../fb-login/fb-login";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = EventListPage;


  constructor() {

  }
}
