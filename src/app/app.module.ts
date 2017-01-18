import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Storage} from "@ionic/storage";


// Import pages
import { HomePage } from '../pages/home/home';
import { EventCreatePage } from '../pages/event-create/event-create';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';

// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';
import {FbLoginPage} from "../pages/fb-login/fb-login";
import {TabsPage} from "../pages/tabs/tabs";
import {PhotoProvider} from "../providers/photo-provider";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    FbLoginPage,
    ResetPasswordPage,
    SignupPage,
    TabsPage,
      FbLoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    FbLoginPage,
    ResetPasswordPage,
    SignupPage,
    TabsPage,
    FbLoginPage
  ],
  providers: [
    [{provide: ErrorHandler, useClass: IonicErrorHandler}],
    AuthData,
    Storage,
    EventData,
    PhotoProvider,
    ProfileData
  ]
})
export class AppModule {}

