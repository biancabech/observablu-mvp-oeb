
import { Home, } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Filter, } from './pages/filter/filter';
import { Routes } from '@angular/router';
import { Empresas } from './pages/empresas/empresas';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: 'filter', component: Filter },
  { path: 'empresas', component: Empresas },
];
