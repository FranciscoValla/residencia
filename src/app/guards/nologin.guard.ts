import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//importaciones necesarias
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor( private AFauth: AngularFireAuth, private ruta : Router )
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.AFauth.authState.pipe(map( auth => {
        //primero verifica si esta logeado o no
        if(isNullOrUndefined(auth)){ //si no esta logeado no deja entrar y regresa al login
          
          return true; // si esta logeado si permite entrar a la pagina
        }else{
          
          this.ruta.navigate(['/home']);
          return false   //si no esta logeado no permite entrar
        }
        // console.log(auth);
        // return false;
      }))
    //true si puedo entrar, False si no se puede entrar

  }
  
}
