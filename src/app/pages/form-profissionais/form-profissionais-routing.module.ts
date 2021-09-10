import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormProfissionaisPage } from './form-profissionais.page';

const routes: Routes = [
  {
    path: '',
    component: FormProfissionaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormProfissionaisPageRoutingModule {}
