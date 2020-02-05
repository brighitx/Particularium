import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateOfferPageRoutingModule } from './update-offer-routing.module';

import { UpdateOfferPage } from './update-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateOfferPageRoutingModule
  ],
  declarations: [UpdateOfferPage]
})
export class UpdateOfferPageModule {}
