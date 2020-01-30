import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  exports: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
