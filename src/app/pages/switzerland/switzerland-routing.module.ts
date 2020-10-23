import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitzerlandPage } from './switzerland.page';

const routes: Routes = [
  {
    path: '',
    component: SwitzerlandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitzerlandPageRoutingModule {}
