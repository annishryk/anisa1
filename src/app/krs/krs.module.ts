import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KrsPageRoutingModule } from './krs-routing.module';

import { KrsPage } from './krs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KrsPageRoutingModule
  ],
  declarations: [KrsPage]
})
export class KrsPageModule {}
