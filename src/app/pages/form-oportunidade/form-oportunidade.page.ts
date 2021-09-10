import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-oportunidade',
  templateUrl: './form-oportunidade.page.html',
  styleUrls: ['./form-oportunidade.page.scss'],
})
export class FormOportunidadePage implements OnInit {

    public formOportunidade = this.formBuilder.group({
        nome: [null],
        email: [null],
        crnm: [null],
        dataNascimento: [null],
        endereco: [null],
        formacaoAcademica: [null],
        habilidades: [null],
        descricao: [null],
        tempoExperiencia: [null],
      });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
}
