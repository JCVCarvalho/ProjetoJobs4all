import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpregadorPossuiCadastroPage } from './empregador-possui-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: EmpregadorPossuiCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpregadorPossuiCadastroPageRoutingModule {}
