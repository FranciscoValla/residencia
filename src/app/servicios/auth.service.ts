import { Injectable } from '@angular/core';

//Aqui se importa todo lo necesario
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth : AngularFireAuth, 
    private ruta : Router,
    private db: AngularFirestore,
    ) 
  { }

  login( correo:string, contraseña:string ){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(correo, contraseña).then(user => {
        resolve(user); 
        //Es un metodo para entrar con correo y contraseña, y entra con el usuario, ese parametro viene de Login.page.ts
      }).catch(err => rejected(err));
    });      
  }

  logout(){
    this.AFauth.signOut().then( auth => {
      this.ruta.navigate(['/login']);
    });
  }

  registro( email: string, contra:string, nombre: string, foto: string, telefono: any) {
    return new Promise ((resolve, reject)=>{
      this.AFauth.createUserWithEmailAndPassword(email, contra).then(datosUsuario =>{
        datosUsuario.user.updateProfile({
          displayName : nombre,
          photoURL: foto
        })
        datosUsuario.user.updatePhoneNumber(telefono); 
      }).catch(err => reject(err));
    })
  }

  obtenerUsuario(){
    return this.AFauth.authState;
  }

  reestablecer(email:string){
    return this.AFauth.sendPasswordResetEmail(email);
  }

}
