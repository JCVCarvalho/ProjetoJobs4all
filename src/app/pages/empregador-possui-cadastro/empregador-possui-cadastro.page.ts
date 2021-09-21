import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Jobs4allService } from 'src/app/jobs4all.service';

@Component({
  selector: 'app-empregador-possui-cadastro',
  templateUrl: './empregador-possui-cadastro.page.html',
  styleUrls: ['./empregador-possui-cadastro.page.scss'],
})
export class EmpregadorPossuiCadastroPage implements OnInit {


    public login = this.formBuilder.group({
        nome: [null],
        empresa: [null],
    });
  constructor(private formBuilder: FormBuilder,
    private _jobs4allService: Jobs4allService,
    private router: Router) { }

  ngOnInit() {
  }

  MakeLogin() {


    this._jobs4allService.getEmpregadores().subscribe((empregadores) => {
        console.log(empregadores);
      
    
        var empregador = empregadores.filter((empregador) => {
            return this.login.get('nome').value === empregador.nome && this.login.get('empresa').value === empregador.empresa;
        })

        console.log(empregador);

        if(empregador.length>0) {
            alert("Login efetuado com sucesso");
            this.router.navigate(['/filtre-profissionais']);
        } else {
            alert("Nenhum usuário encontrado");
        }
    });
}

}
