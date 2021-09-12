import { Component, OnInit } from '@angular/core';
import { Jobs4allService } from '../jobs4all.service';

@Component({
  selector: 'app-filtre-profissionais',
  templateUrl: './filtre-profissionais.page.html',
  styleUrls: ['./filtre-profissionais.page.scss'],
})
export class FiltreProfissionaisPage implements OnInit {


    public colaboradores: any[] = [];
  constructor(
      private _jobs4allService: Jobs4allService,
  ) {

    this.buscaColaboradores();
   }

  ngOnInit() {
  }

  buscaColaboradores() {
    this._jobs4allService.getColaboradores().subscribe((colaboradores: any[]) => {
        this.colaboradores = colaboradores;
    })
}

}
