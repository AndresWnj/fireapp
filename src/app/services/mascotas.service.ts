import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { HolderMascota } from '../models/HolderMascota';
@Injectable({
 providedIn: 'root'
})
export class MascotasService {

 mMascotas: AngularFireList<any>;

 constructor(private mAngularFireDatabase:AngularFireDatabase) {}
  getMascotas(){
    return this.mMascotas=this.mAngularFireDatabase.list('mascotas');
  }
  addMascota(mMascota:HolderMascota){
     this.mMascotas.push({
       nombre:mMascota.nombre,
       edad:mMascota.edad,
       raza:mMascota.raza
     });
  }
  updateMascota(mMascota:HolderMascota){
     this.mMascotas.update(mMascota.$key, {
       nombre:mMascota.nombre,
       edad:mMascota.edad,
       raza:mMascota.raza
     });
  }
  deleteMascota($key:string){
     this.mMascotas.remove($key);
  }


}