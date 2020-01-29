import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDemandPage } from './create-demand.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDemandPageRoutingModule {}
