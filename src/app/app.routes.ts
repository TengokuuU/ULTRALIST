import { Routes } from '@angular/router';
import { Quit } from './quit/quit';

export const routes: Routes = [
  // This is now your Title Screen (screen2.jpg / obraz.jpg)
  { 
    path: '', 
    loadComponent: () => import('./main-menu/main-menu').then(m => m.MainMenu) 
  },
  
  // This is the Selection Menu (screen1.png)
  { 
    path: 'selection', 
    loadComponent: () => import('./selectionmenu/selectionmenu').then(m => m.Selectionmenu) 
  },

  // Level Groups
  { 
    path: 'prelude', 
    loadComponent: () => import('./prelude/prelude').then(m => m.Prelude) 
  },
  { 
    path: 'act-i', 
    loadComponent: () => import('./act-i/act-i').then(m => m.ActI) 
  },
  { 
    path: 'act-ii', 
    loadComponent: () => import('./act-ii/act-ii').then(m => m.ActII) 
  },
  { 
    path: 'act-iii', 
    loadComponent: () => import('./act-iii/act-iii').then(m => m.ActIII) 
  },
  { 
    path: 'prime-sanctums', 
    loadComponent: () => import('./prime-sanctums/prime-sanctums').then(m => m.PrimeSanctums) 
  },
{ path: 'quit', component: Quit },
{path: 'museum', loadComponent: () => import('./museum/museum').then(m => m.Museum) },
{path: 'encores', loadComponent: () => import('./encores/encores').then(m => m.Encores) },
{path: 'options', loadComponent: () => import('./options/options').then(m => m.Options) },
{path: 'pinfo/:levelId', loadComponent: () => import('./pinfo/pinfo').then(m => m.PInfo) },
{path: 'cyber-grind', loadComponent: () => import('./cyber-grind/cyber-grind').then(m => m.CyberGrind) },
{path: 'sandbox', loadComponent: () => import('./sandbox/sandbox').then(m => m.Sandbox) },
  // Fallback redirect back to Title Screen
  { path: '**', redirectTo: '' }
];