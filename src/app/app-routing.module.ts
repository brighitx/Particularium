import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)},
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'stream',
    loadChildren: () => import('./pages/stream/stream.module').then( m => m.StreamPageModule)
  },
  {
    path: 'create-demand',
    loadChildren: () => import('./pages/create-demand/create-demand.module').then( m => m.CreateDemandPageModule)
  },
  {
    path: 'create-offer',
    loadChildren: () => import('./pages/create-offer/create-offer.module').then( m => m.CreateOfferPageModule)
  },
  {
    path: 'show-my-offers',
    loadChildren: () => import('./pages/show-my-offers/show-my-offers.module').then( m => m.ShowMyOffersPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./pages/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
