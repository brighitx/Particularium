import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDemandPageRoutingModule } from './create-demand-routing.module';

import { CreateDemandPage } from './create-demand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDemandPageRoutingModule
  ],
  declarations: [CreateDemandPage]
})
export class CreateDemandPageModule {}
