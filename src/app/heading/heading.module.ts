import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadingPageRoutingModule } from './heading-routing.module';

import { HeadingPage } from './heading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadingPageRoutingModule
  ],
  declarations: [HeadingPage]
})
export class HeadingPageModule {}
