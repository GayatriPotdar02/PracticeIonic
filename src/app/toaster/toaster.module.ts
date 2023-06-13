import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToasterPageRoutingModule } from './toaster-routing.module';

import { ToasterPage } from './toaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToasterPageRoutingModule
  ],
  declarations: [ToasterPage]
})
export class ToasterPageModule {}
