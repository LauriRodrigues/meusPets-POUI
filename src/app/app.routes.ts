import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'tutores', 
    loadChildren: () => import('./pages/owners/owners.routes').then(m => m.ownersRoutes) 
  },
  { 
    path: 'pets', 
    loadChildren: () => import('./pages/pets/pets.routes').then(m => m.petsRoutes) 
  }
];
