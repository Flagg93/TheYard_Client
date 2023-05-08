import { Routes } from '@angular/router';
import {AuthService} from './auth.service'

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [AuthService]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: '',
    loadComponent: () => import('./landing/landing.page').then( m => m.LandingPage)
  },
];
