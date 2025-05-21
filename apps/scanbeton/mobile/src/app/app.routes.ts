import { Routes } from '@angular/router';
import { APP_SCANBETON_ROUTES } from '@cloud-factory/app-scanbeton-mobile';
import { AUTH_ROUTES } from '@cloud-factory/shared-auth-mobile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'main',
    children: APP_SCANBETON_ROUTES,
  },
  {
    path: 'auth',
    children: AUTH_ROUTES,
  },
  { path: '**', redirectTo: '/auth' }
];
