import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantonsPageRoutingModule } from './cantons-routing.module';

import { CantonsPage } from './cantons.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantonsPageRoutingModule,
    TranslateModule
  ],
  declarations: [CantonsPage]
})
export class CantonsPageModule {}
