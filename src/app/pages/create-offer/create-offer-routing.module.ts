import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOfferPage } from './create-offer.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOfferPageRoutingModule {}
