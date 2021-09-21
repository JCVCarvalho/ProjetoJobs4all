import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOportunidadePageRoutingModule } from './form-oportunidade-routing.module';

import { FormOportunidadePage } from './form-oportunidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormOportunidadePageRoutingModule,
  ],
  declarations: [FormOportunidadePage]
})
export class FormOportunidadePageModule {}
