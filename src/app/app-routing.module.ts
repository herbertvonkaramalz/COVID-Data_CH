import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: 'switzerland',
    loadChildren: () => import('./pages/switzerland/switzerland.module').then( m => m.SwitzerlandPageModule)
  },
  {
    path: 'cantons',
    loadChildren: () => import('./pages/cantons/cantons.module').then( m => m.CantonsPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./pages/symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
