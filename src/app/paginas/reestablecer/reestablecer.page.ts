import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  public email :string;

  constructor(
    private authServicio : AuthService,
    private nav : NavController,
  ) { }

  ngOnInit() {
  }

  reestablecerContra(){

    if( this.email != ""){
      this.authServicio.reestablecer(this.email).then(()=> {
        alert('Correo enviado, revisa tu correo electronico');
        this.nav.navigateBack('/login');
      }).catch(()=>{
        alert('Error al enviar correo');
        
      })
    }else{
      alert('No escribiste ningun correo');
    }

  }

}
