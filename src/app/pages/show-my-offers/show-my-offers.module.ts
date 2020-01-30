import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMyOffersPageRoutingModule } from './show-my-offers-routing.module';

import { ShowMyOffersPage } from './show-my-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMyOffersPageRoutingModule
  ],
  declarations: [ShowMyOffersPage]
})
export class ShowMyOffersPageModule {}
