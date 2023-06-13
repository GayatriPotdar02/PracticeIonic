import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioBtnPage } from './radio-btn.page';

const routes: Routes = [
  {
    path: '',
    component: RadioBtnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioBtnPageRoutingModule {}
