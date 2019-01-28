import { Component } from '@angular/core';
import {HolderMascota} from './models/HolderMascota';
import {MascotasService} from './services/mascotas.service';

import * as firebase from 'firebase';
import {MessagingService} from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fireapp';

  messaging = firebase.messaging();

 mHoldersMascotas:HolderMascota[];
 constructor(private mMascotasService:MascotasService, private mMessagingService: MessagingService) {
  
     //Primero obtenemos la lista de firebase
     this.mMascotasService.getMascotas()
     .snapshotChanges()
     .subscribe(item=>{
         console.log("Consultado...");
         this.mHoldersMascotas=[];
         item.forEach(element=>{
           let mJson= element.payload.toJSON();
           mJson['$key']=element.key;
           this.mHoldersMascotas.push(mJson as HolderMascota);
         })
     });

    
  }

  onClick(){
    /* alert("Hola mundo"); */

/*     this.messaging.requestPermission()
    .then(function () {
      console.log('Permiso concedido');
      this.getToken();
    })
    .catch(function (err) {
      console.log('Error en permiso push', err);
    }); */
    console.log("Click...");
    this.mMessagingService.enableNotifications();
    this.mMessagingService.listen();
  }

  onClick2(){
    this.mMessagingService.notificacion();
    /* this.mMessagingService.notificacion().subscribe(result=>{
        console.log("ENVIADO....");
    }); */
  }

 /*  getToken(){
    this.messaging.getToken()
          .then(function (currentToken) {
            if (currentToken) {
              console.log("TOKEN--> "+currentToken);

            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
            }
          })
          .catch(function (err) {
            console.log('An error occurred while retrieving token.', err);
          });
  } */

  
}
