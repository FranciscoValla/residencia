import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-proyecto2',
  templateUrl: './proyecto2.component.html',
  styleUrls: ['./proyecto2.component.scss'],
})
export class Proyecto2Component implements OnInit {

  public proyecto: any;
  public dato : any;

  public mensajes = [];
  public msg : string;

  constructor(
    private crud : CrudService,
    private pN : NavParams,
    public modal : ModalController,
  ) { }

  ngOnInit() {
    this.crud.obtenerProyecto(this.proyecto.id).subscribe( dato => {
      console.log(dato);
      this.dato= dato;
    })
    this.proyecto = this.pN.get('proyecto');
  }

  cerrarProyecto(){
    this.modal.dismiss();
  }



}
