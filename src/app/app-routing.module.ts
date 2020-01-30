import { IsNotLoginGuard } from './guard/isNotLogin/is-not-login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoginGuard } from './guard/isLogin/is-login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then(m => m.StartPageModule),
    canActivate: [IsNotLoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
    canActivate: [IsNotLoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [IsNotLoginGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'stream',
    loadChildren: () => import('./pages/stream/stream.module').then(m => m.StreamPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'create-demand',
    loadChildren: () => import('./pages/create-demand/create-demand.module').then(m => m.CreateDemandPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'create-offer',
    loadChildren: () => import('./pages/create-offer/create-offer.module').then(m => m.CreateOfferPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'show-my-offers',
    loadChildren: () => import('./pages/show-my-offers/show-my-offers.module').then(m => m.ShowMyOffersPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./pages/update-profile/update-profile.module').then(m => m.UpdateProfilePageModule),
    canActivate: [IsLoginGuard]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
