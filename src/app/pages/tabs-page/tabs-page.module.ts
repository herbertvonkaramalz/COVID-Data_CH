import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';

import { TranslateModule } from '@ngx-translate/core';
import { SwitzerlandPageModule } from '../switzerland/switzerland.module';
import { CantonsPageModule } from '../cantons/cantons.module';
import { SymptomsPageModule } from '../symptoms/symptoms.module';


@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    SwitzerlandPageModule,
    CantonsPageModule,
    SymptomsPageModule,
    TabsPageRoutingModule,
    TranslateModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
