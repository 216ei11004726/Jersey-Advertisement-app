import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { ChelseaPage } from '../pages/chelsea/chelsea';
import { ManCityPage } from '../pages/man-city/man-city';
import { ManUPage } from '../pages/man-u/man-u';
import { ArsenalPage } from '../pages/arsenal/arsenal';
import { TothenhamPage } from '../pages/tothenham/tothenham';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamsPage,
    ChelseaPage,
    ManCityPage,
    ManUPage,
    ArsenalPage,
    TothenhamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeamsPage,
    ChelseaPage,
    ManCityPage,
    ManUPage,
    ArsenalPage,
    TothenhamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
