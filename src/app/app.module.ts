import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WalletPage } from '../pages/wallet/wallet';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { WalletsService } from '../services/wallets.service';
import { AuthService } from '../services/auth.service';
//import { Facebook } from '@ionic-native/facebook'


export const firebaseConfig = {
  apiKey: "AIzaSyBEfIKpVVKjNGtAxDZ_AIUCl_-imGSrbWQ",
  authDomain: "testing-6af56.firebaseapp.com",
  databaseURL: "https://testing-6af56.firebaseio.com",
  projectId: "testing-6af56",
  storageBucket: "testing-6af56.appspot.com",
  messagingSenderId: "446169302811"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WalletPage,
    ProfilePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalletPage,
    ProfilePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WalletsService,
    AuthService,
    //Facebook 

  ]
})
export class AppModule {}
