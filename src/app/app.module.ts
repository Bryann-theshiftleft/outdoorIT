import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MembersPage } from '../pages/members/members';
import { LoginPage } from '../pages/login/login';
import { ActivityPage } from '../pages/activity/activity';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const firebaseAuth = {
    apiKey: 'AIzaSyCYe6udq4wifH6TFfOHshKGwB2-3rWZaQ8',
    authDomain: 'outdoorit-7e536.firebaseapp.com',
    databaseURL: 'https://outdoorit-7e536.firebaseio.com',
    projectId: 'outdoorit-7e536',
    storageBucket: 'outdoorit-7e536.appspot.com',
    messagingSenderId: 'outdoorit-7e536.appspot.com' 
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MembersPage,
    LoginPage,
    ActivityPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MembersPage,
    LoginPage,
    ActivityPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
