import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManCityPage } from './man-city';

@NgModule({
  declarations: [
    ManCityPage,
  ],
  imports: [
    IonicPageModule.forChild(ManCityPage),
  ],
})
export class ManCityPageModule {}
