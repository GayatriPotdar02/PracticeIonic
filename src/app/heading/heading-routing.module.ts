import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadingPage } from './heading.page';

const routes: Routes = [
  {
    path: '',
    component: HeadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadingPageRoutingModule {}
