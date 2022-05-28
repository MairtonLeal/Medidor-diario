import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaturaPageRoutingModule } from './fatura-routing.module';

import { FaturaPage } from './fatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaturaPageRoutingModule
  ],
  declarations: [FaturaPage]
})
export class FaturaPageModule {}
