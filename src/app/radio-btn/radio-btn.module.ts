import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioBtnPageRoutingModule } from './radio-btn-routing.module';

import { RadioBtnPage } from './radio-btn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioBtnPageRoutingModule
  ],
  declarations: [RadioBtnPage]
})
export class RadioBtnPageModule {}
