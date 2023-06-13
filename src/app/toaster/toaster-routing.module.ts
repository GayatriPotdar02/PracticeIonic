import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToasterPage } from './toaster.page';

const routes: Routes = [
  {
    path: '',
    component: ToasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToasterPageRoutingModule {}
