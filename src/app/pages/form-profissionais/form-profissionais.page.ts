import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-profissionais',
  templateUrl: './form-profissionais.page.html',
  styleUrls: ['./form-profissionais.page.scss'],
})
export class FormProfissionaisPage implements OnInit {

    public formProfessionais = this.formBuilder.group({
        nome: [null],
        empresa: [null],
        setor: [null],
        areaAtuacao: [null],
        
      });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }



}
