import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChelseaPage } from './chelsea';

@NgModule({
  declarations: [
    ChelseaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChelseaPage),
  ],
})
export class ChelseaPageModule {}
