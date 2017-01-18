import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Storage} from "@ionic/storage";


// Import pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import {RecipeListPage} from "../pages/recipe-list/recipe-list";
import {RecipeDetailPage} from "../pages/recipe-detail/recipe-detail";
import {RecipeCreatePage} from "../pages/recipe-create/recipe-create";
import {FbLoginPage} from "../pages/fb-login/fb-login";
import {TabsPage} from "../pages/tabs/tabs";

// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';

import {PhotoProvider} from "../providers/photo-provider";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipeCreatePage,
    RecipeDetailPage,
    RecipeListPage,
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
    RecipeCreatePage,
    RecipeDetailPage,
    RecipeListPage,
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

