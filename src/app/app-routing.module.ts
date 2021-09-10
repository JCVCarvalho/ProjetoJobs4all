import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form-profissionais',
    loadChildren: () => import('./pages/form-profissionais/form-profissionais.module').then( m => m.FormProfissionaisPageModule)
  },
  {
    path: 'form-oportunidade',
    loadChildren: () => import('./pages/form-oportunidade/form-oportunidade.module').then( m => m.FormOportunidadePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
