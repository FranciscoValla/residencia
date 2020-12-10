import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';
import { CrudService } from 'src/app/servicios/crud.service';
import { ActualizarComponent } from '../actualizar/actualizar.component';
import { Proyecto2Component } from '../proyecto2/proyecto2.component'
 
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public proyectos : any [];

  public correo : string;
  public contra : string;
  public nombre : string;
  public foto : string;

  public usuarios : any [];
  
  
  constructor(
    private crud : CrudService,
    private modal : ModalController,
    private authS : AuthService,
    private authServicio : AuthService,
    ) 
  { }

  ngOnInit() {
    this.crud.obtenerProyectos().subscribe(proyectos => {
    this.proyectos = proyectos;
    })
    this.crud.obtenerUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios;
    })
    this.authServicio.obtenerUsuario().subscribe(auth => {
      this.correo = auth.email;
      this.nombre = auth.displayName;
      this.foto = auth.photoURL;
      console.log(auth);
    })
  }

  logout(){
    this.authS.logout();
  }

  public eliminar(id : any){
    this.crud.eliminarProyecto(id);
  }

  public actualizarProyecto(proyecto){
    this.modal.create({
      component: ActualizarComponent,
      componentProps: { proyecto : proyecto}
    }).then( (modal) => modal.present() )
    
  }

  public abrirProyecto(proyecto){
    this.modal.create({
      component: Proyecto2Component,
      componentProps: { proyecto : proyecto}
    }).then( (modal) => modal.present() )
  }


}
