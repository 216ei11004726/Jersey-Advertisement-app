import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChelseaPage } from '../chelsea/chelsea';
import { ManUPage } from '../man-u/man-u';
import { ManCityPage } from '../man-city/man-city';
import { ArsenalPage } from '../arsenal/arsenal';
import { TothenhamPage } from '../tothenham/tothenham';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  Chelsea(){
    this.navCtrl.push(ChelseaPage);
  }

  ManU(){
    this.navCtrl.push(ManUPage);
  }

  ManCity(){
    this.navCtrl.push(ManCityPage);
  }

  Arsenal(){
    this.navCtrl.push(ArsenalPage);
  }

  Tothenham(){
    this.navCtrl.push(TothenhamPage);
  }
}
