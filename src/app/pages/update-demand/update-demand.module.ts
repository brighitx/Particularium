import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDemandPageRoutingModule } from './update-demand-routing.module';

import { UpdateDemandPage } from './update-demand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDemandPageRoutingModule
  ],
  declarations: [UpdateDemandPage]
})
export class UpdateDemandPageModule {}
