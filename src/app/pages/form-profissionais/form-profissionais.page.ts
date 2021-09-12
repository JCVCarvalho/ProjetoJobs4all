import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Jobs4allService } from 'src/app/jobs4all.service';

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
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private _jobs4allService: Jobs4allService

    ) { }

    ngOnInit() {
    }

    navigateToFiltroProfissionais() {

        this.requestSaveEmpregador();
        
    }

    requestSaveEmpregador() {


        this._jobs4allService.saveEmpregador(this.formProfessionais.value).subscribe((empregadores) => {
            console.log(empregadores);
            this.router.navigate(['/filtre-profissionais']);
            // this.toasterService.pop('success', 'Cadastro criado com sucesso!');
            // this.router.navigateByUrl('/login');
        });
    }



}
