import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { mensaje } from '../modelos/mensaje';

export interface ProyectoB {
  id?: any;
  nombre:string;
  subnombre:string;
  presupuesto: number;
  img: string;
}

export interface UsuariosB {
  id? : any;
paterno : string;
materno : string;
nombre : string;
nacimiento : Date;
puesto : string;
telefono : number;
email : string;
contra : string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
   constructor ( private db: AngularFirestore ){
    
  }

   obtenerProyectos(){
    return this.db.collection('proyectosB').snapshotChanges().pipe( map ( rooms => {
      return rooms.map( a => {
        const data = a.payload.doc.data() as ProyectoB;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
   }

   //--------------Proyecto--------------
   obtenerProyecto(proyecto_id :any){
    return this.db.collection('proyectos').doc(proyecto_id).valueChanges()
   }

   eliminarProyecto(proyecto_id){
    return this.db.collection('proyectosB').doc(proyecto_id).delete();
  }

  crearProyecto(proyecto:any){
    return this.db.collection("proyectosB").add(proyecto);
  }

  actualizarProyecto(proyecto_id:any, proyecto:any){
    return this.db.collection("proyectosB").doc(proyecto_id).update(proyecto);
  }

  enviarMensaje( msg : mensaje, proyecto_id : string){
    this.db.collection('proyectosB').doc(proyecto_id).update({
      msg : msg
    })
  }
  //--------------------------Proyecto-----------------

  obtenerUsuarios(  ){
    return this.db.collection('usuarios').snapshotChanges().pipe( map ( rooms => {
      return rooms.map( a => {
        const data = a.payload.doc.data() as UsuariosB;
        data.id = a.payload.doc.id;
        return data;
      })
    }))

  }

  crearUsuario(usuarios:any){
    return this.db.collection('usuarios').add(usuarios); 
  }
  
  obtenerUsuario(email:string){
    return this.db.collection('usuarios').doc(email).valueChanges()
  }

}
