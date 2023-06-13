import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RippleButtonsPage } from './ripple-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: RippleButtonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RippleButtonsPageRoutingModule {}
