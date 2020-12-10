import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { mensaje } from 'src/app/modelos/mensaje';
import { ProyectosB } from 'src/app/modelos/proyectos.interface';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  id?: any;
    nombre:string;
    subnombre:string;
    presupuesto: number;
    img: string;
    fecha_final: string;
    //------------

    constructor( 
    private crud : CrudService,
    private nav : NavController,
    ) { }

  ngOnInit() {
  }

  public crear(){
    const proyecto : ProyectosB = {
      nombre : this.nombre,
      subnombre : this.subnombre,
      presupuesto : this.presupuesto,
      img : this.img,
      fecha_final : this.fecha_final
    }
    this.crud.crearProyecto( proyecto );
    this.nav.navigateForward('inicio');
    }
    // 
  

}
