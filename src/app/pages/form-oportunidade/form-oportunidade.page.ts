import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Jobs4allService } from 'src/app/jobs4all.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-form-oportunidade',
  templateUrl: './form-oportunidade.page.html',
  styleUrls: ['./form-oportunidade.page.scss'],
})
export class FormOportunidadePage implements OnInit {

    public formOportunidade = this.formBuilder.group({
        nome: [null, Validators.required],
        whatsapp: [null, Validators.required],
        crnm: [null, Validators.required],
        dataNascimento: [null, Validators.required],
        endereco: [null, Validators.required],
        formacaoAcademica: [null, Validators.required],
        habilidades: [0],
        descricao: [null, Validators.required],
        tempoExperiencia: [null, Validators.required],
      });

      public location;

  constructor(
      private formBuilder: FormBuilder,
      private _jobs4allService: Jobs4allService,
      private toastCtrl: ToastController,
      private geolocation: Geolocation
      ) { }

  ngOnInit() {
  }


  requestSaveEmpregador() {


    this._jobs4allService.saveColaborador(this.formOportunidade.value).subscribe((colaborador) => {
        console.log(colaborador);
        alert('Seu cadastro foi concluído com sucesso');
    });
}

showMap() {

    this.geolocation.getCurrentPosition().then((resp) => {
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       let watch = this.geolocation.watchPosition();
       watch.subscribe((data: any) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${data.coords.latitude},${data.coords.longitude}`, '_blank');
       });
    
  
    }

  
}


