import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamsPage } from '../teams/teams';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

Teams(){
  this.navCtrl.push(TeamsPage);
}

}
