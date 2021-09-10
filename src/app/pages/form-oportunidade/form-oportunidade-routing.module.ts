import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOportunidadePage } from './form-oportunidade.page';

const routes: Routes = [
  {
    path: '',
    component: FormOportunidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOportunidadePageRoutingModule {}
