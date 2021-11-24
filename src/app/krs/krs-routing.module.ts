import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KrsPage } from './krs.page';

const routes: Routes = [
  {
    path: '',
    component: KrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KrsPageRoutingModule {}
