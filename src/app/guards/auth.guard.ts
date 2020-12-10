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
export class AuthGuard implements CanActivate {

  constructor( private AFauth: AngularFireAuth, private ruta : Router )
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.AFauth.authState.pipe(map( auth => {
        //primero verifica si esta logeado o no
        if(isNullOrUndefined(auth)){ //si no esta logeado no deja entrar y regresa al login
          this.ruta.navigate(['/login']);
          return false //si no esta logeado no permite entrar
        }else{
          return true // si esta logeado si permite entrar a la pagina
        }
        // console.log(auth);
        // return false;
      }))
      
  }
  
}
