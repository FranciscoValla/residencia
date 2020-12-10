import { Component, OnInit } from '@angular/core';

//--------------------*************
import { Router } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor( 
    private authServicio : AuthService, 
    public ruta : Router,
    private modal : ModalController )  { }


  ngOnInit() {
  }

  enviarLogin(){
    //traemos los datos del enviroment authServicios, verifica si es correcto o no. Y esto se verifica con el auth.servicice.ts
    this.authServicio.login(this.email, this.password).then( res =>{
      this.ruta.navigate(['/home']);
    }).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  }

    
  

}
