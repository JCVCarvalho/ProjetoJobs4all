import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormProfissionaisPageRoutingModule } from './form-profissionais-routing.module';

import { FormProfissionaisPage } from './form-profissionais.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FormProfissionaisPageRoutingModule
  ],
  declarations: [FormProfissionaisPage]
})
export class FormProfissionaisPageModule {}
