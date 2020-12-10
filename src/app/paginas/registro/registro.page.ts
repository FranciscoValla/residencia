import { Component, OnInit } from '@angular/core';
// ---------------*******------
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';
import { UsuariosB } from 'src/app/modelos/usuarios.interface';

import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { stringify } from 'querystring';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  id? : any;
  paterno : string;
  materno : string;
  nombre : string;
  telefono : number;
  email : string;
  contra : string;
  foto : string;
  nombre_completo : string;

  constructor( 
    private authServicio : AuthService,
    public ruta : NavController,
    public crud : CrudService,
    public af:AngularFireAuth, public fs : AngularFirestore,
    ) { }

  ngOnInit() {
  }

  registrar(){
    this.nombre_completo = this.paterno + ' ' + this.materno + ' ' + this.nombre;
    //-----------Esto se envia a Autencticacion en Firebase
    this.authServicio.registro(this.email,this.contra, this.nombre_completo, this.foto,this.telefono).then( auth=>{
      this.ruta.navigateForward('/home');
    }).catch( err => (err));
  }

  //-----------Esto se envia a la base de datos en firebase
    // const usuario : UsuariosB = {this
    //   paterno : this.paterno,
    //   materno : this.materno,
    //   nombre : this.nombre,
    //   nacimiento : this.nacimiento,
    //   puesto : this.puesto,
    //   telefono : this.telefono,
    //   email : this.email,
    //   contra : this.contra,
    // }
    // this.crud.crearUsuario(usuario)

}
