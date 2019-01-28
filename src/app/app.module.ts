import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule} from './material';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { firebaseConfig } from '../environments/firebase';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('/combined-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mSwUpdate:SwUpdate, mSwPush:SwPush){
     /*  mSwUpdate.available.subscribe(update=>{
        console.log("Esta habilitado");
      });

      mSwPush.messages.subscribe(messages=>{
        console.log("Mensajes --> ");
      }); */

      /* const key="";
      mSwPush.requestSubscription({serverPublicKey:key})
      .then(pushSubscription=>{
          console.log("que sera? "+pushSubscription.toJSON());
      }); */
  }
}
