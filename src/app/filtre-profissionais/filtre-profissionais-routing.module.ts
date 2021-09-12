import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltreProfissionaisPage } from './filtre-profissionais.page';

const routes: Routes = [
  {
    path: '',
    component: FiltreProfissionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltreProfissionaisPageRoutingModule {}
