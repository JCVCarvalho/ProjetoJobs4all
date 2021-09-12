import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltreProfissionaisPageRoutingModule } from './filtre-profissionais-routing.module';

import { FiltreProfissionaisPage } from './filtre-profissionais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltreProfissionaisPageRoutingModule
  ],
  declarations: [FiltreProfissionaisPage]
})
export class FiltreProfissionaisPageModule {}
