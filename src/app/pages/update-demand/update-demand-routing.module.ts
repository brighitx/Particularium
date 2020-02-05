import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDemandPage } from './update-demand.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDemandPageRoutingModule {}
