import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpregadorPossuiCadastroPageRoutingModule } from './empregador-possui-cadastro-routing.module';

import { EmpregadorPossuiCadastroPage } from './empregador-possui-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    EmpregadorPossuiCadastroPageRoutingModule
  ],
  declarations: [EmpregadorPossuiCadastroPage]
})
export class EmpregadorPossuiCadastroPageModule {}
