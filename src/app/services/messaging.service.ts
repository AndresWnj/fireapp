import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private messaging: firebase.messaging.Messaging;
 /*  private unsubscribeOnTokenRefresh = () => {}; */

 mPushData: any = {
    'notification': {
      "title": "Background Message Title",
      "body": "Background Message Body"
    },
    "to": ""
  }

  constructor(private mHttpClient:HttpClient)
  {
    this.messaging=firebase.messaging();
  }

  public enableNotifications() {
    console.log('Requesting permission...');
    this.messaging.requestPermission().then(() => {
        console.log('Permiso concedido');
        this.messaging.getToken().then((currentToken) => {
          if (currentToken) {
            console.log('token '+currentToken);
            this.mPushData.to=currentToken;
          } else {
            console.log('No Instance ID token available. Request permission to generate one.');
          }  
        });
      });
  }

  public listen(){
    this.messaging.onMessage(function (payload) {
      console.log("Mensaje recibido. ", payload);
    });
  }

  public notificacion(){
    this.generatePush(this.mPushData);
  }

  private generatePush(pushData) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'key=AIzaSyBsL7gGX7VTPhz6tKDTm3Dr_9Z4fExYFYE'
    }); 

    let options = { headers: httpHeaders}; 
    console.log("enviando....");
    this.mHttpClient.post('https://fcm.googleapis.com/fcm/send', pushData, options);
  }
    
}
