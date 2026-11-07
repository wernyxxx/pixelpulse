import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home, title: 'PixelPulse — Acasă' },
      {
        path: 'stiri',
        title: 'PixelPulse — Știri',
        loadComponent: () => import('./features/stiri/stiri').then(m => m.Stiri),
      },
      {
        path: 'despre',
        title: 'PixelPulse — Despre noi',
        loadComponent: () => import('./features/despre/despre').then(m => m.Despre),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
