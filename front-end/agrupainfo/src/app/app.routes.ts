import { Routes } from '@angular/router';
import { Home,  } from './pages/home/home';
import {  Dashboard} from './pages/dashboard/dashboard';
import { Filter,  } from './pages/filter/filter';

export const routes: Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: Home},
  { path: 'dashboard', component: Dashboard },
  { path: 'filter', component: Filter },
];