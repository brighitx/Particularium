import { UpdateDemandPageModule } from './../update-demand/update-demand.module';
import { UpdateDemandPage } from './../update-demand/update-demand.page';
import { UpdateOfferPageModule } from './../update-offer/update-offer.module';
import { UpdateOfferPage } from './../update-offer/update-offer.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMyOffersPageRoutingModule } from './show-my-offers-routing.module';

import { ShowMyOffersPage } from './show-my-offers.page';

@NgModule({
  entryComponents: [
    UpdateOfferPage,
    UpdateDemandPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMyOffersPageRoutingModule,
    UpdateOfferPageModule,
    UpdateDemandPageModule
  ],
  declarations: [ShowMyOffersPage]
})
export class ShowMyOffersPageModule { }
