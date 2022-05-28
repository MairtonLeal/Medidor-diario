import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaturaPage } from './fatura.page';

const routes: Routes = [
  {
    path: '',
    component: FaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaturaPageRoutingModule {}
