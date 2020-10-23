import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantonsPage } from './cantons.page';

const routes: Routes = [
  {
    path: '',
    component: CantonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantonsPageRoutingModule {}
