import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth,  } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp({
      projectId: "prueba-af938",
      appId: "1:699015658710:web:672ac302f42b9926241d77",
      storageBucket: "prueba-af938.firebasestorage.app",
      apiKey: "AIzaSyDfAwhRHaLLxMRDip8SynEZBZC_dbFdMmI",
      authDomain: "prueba-af938.firebaseapp.com",
      messagingSenderId: "699015658710",
      measurementId: "G-44LV1NXZXK"
      // projectNumber: "699015658710",
      // version: "2"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
