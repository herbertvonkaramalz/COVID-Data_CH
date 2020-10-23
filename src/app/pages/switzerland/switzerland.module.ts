import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitzerlandPageRoutingModule } from './switzerland-routing.module';

import { SwitzerlandPage } from './switzerland.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitzerlandPageRoutingModule,
    TranslateModule
  ],
  declarations: [SwitzerlandPage]
})
export class SwitzerlandPageModule {}
