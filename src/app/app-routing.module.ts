import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//AQUI IMPORTARE MODULOS Y COMPONENTES NECESARIO
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
    , canActivate: [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
    , canActivate: [NologinGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
    , canActivate: [AuthGuard]
  },
  {
    path: 'crear',
    loadChildren: () => import('./paginas/crear/crear.module').then( m => m.CrearPageModule)
    , canActivate : [AuthGuard]
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./paginas/reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
