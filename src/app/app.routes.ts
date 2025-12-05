
import { Home, } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Routes } from '@angular/router';
import { Empresas } from './pages/empresas/empresas';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'empresas', component: Empresas },
];
