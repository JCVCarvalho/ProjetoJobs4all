import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Jobs4allService } from '../jobs4all.service';

@Component({
    selector: 'app-filtre-profissionais',
    templateUrl: './filtre-profissionais.page.html',
    styleUrls: ['./filtre-profissionais.page.scss'],
})
export class FiltreProfissionaisPage implements OnInit {

    public select = [
        { value: 1, desc: 'Boa Comunicação' },
        {value: 2, desc: 'Excel Avançado'},
        {value: 3, desc: 'Inglês'},
    ];
    public colaboradores: any[] = [];
    public colab: any[] = [];
    public buscaColab = [];

    public formFiltro = this.formBuilder.group({
       filtro: [0],
      });



    constructor(
        private _jobs4allService: Jobs4allService,
        private formBuilder: FormBuilder,
    ) {

        this.buscaColaboradores();
    }



    ngOnInit() {

        

        this.formFiltro.get('filtro').valueChanges.subscribe((filtro) => {
           
            console.log(filtro);
           

            const find = this.select.find((el) => {
                return Number(filtro) === el.value;
            })

            console.log(find);

            if(find.desc) {
                this.colaboradores = this.buscaColab;
                this.colaboradores.map((colaborador) => {
                    if(colaborador.habilidades === find.desc) {
                        this.colab.push(colaborador);
                    } else {
                        this.colab = [];
                    }
                })

                console.log(this.colab);
                this.colaboradores = this.colab;

            }

        })
    }

    buscaColaboradores() {
        this._jobs4allService.getColaboradores().subscribe((colaboradores: any[]) => {
            console.log(colaboradores);

          this.buscaColab = colaboradores;
            this.colaboradores = colaboradores;
            this.convertHabilidade();
        })
    }


    convertHabilidade() {
      

        this.select.forEach((s) => {
           this.colaboradores.map((c) => {
                if(Number(s.value) === Number(c.habilidades)) {
                    return c.habilidades = s.desc;
                } 
            })
        })

        console.log(this.colaboradores);
      
    }

}
