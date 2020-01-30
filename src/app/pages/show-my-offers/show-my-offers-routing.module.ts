import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMyOffersPage } from './show-my-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMyOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMyOffersPageRoutingModule {}
