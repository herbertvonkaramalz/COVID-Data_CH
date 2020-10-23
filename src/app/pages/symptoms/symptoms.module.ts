import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsPageRoutingModule } from './symptoms-routing.module';

import { SymptomsPage } from './symptoms.page';

import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsPageRoutingModule,
    TranslateModule
  ],
  declarations: [SymptomsPage]
})
export class SymptomsPageModule {}
