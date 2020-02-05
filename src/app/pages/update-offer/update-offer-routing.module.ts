import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateOfferPage } from './update-offer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateOfferPageRoutingModule {}
