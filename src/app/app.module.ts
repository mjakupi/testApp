import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

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

// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY",
  authDomain: "ionic-firebase-auth-9f555.firebaseapp.com",
  databaseURL: "https://ionic-firebase-auth-9f555.firebaseio.com",
  storageBucket: "ionic-firebase-auth-9f555.appspot.com"
};
 
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventCreatePage,
    EventDetailPage,
    EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
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
    ResetPasswordPage,
    SignupPage
  ],
  providers: [
    AuthData,
    EventData,
    ProfileData
  ]
})
export class AppModule {}

