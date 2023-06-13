import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RippleButtonsPageRoutingModule } from './ripple-buttons-routing.module';

import { RippleButtonsPage } from './ripple-buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RippleButtonsPageRoutingModule
  ],
  declarations: [RippleButtonsPage]
})
export class RippleButtonsPageModule {}
