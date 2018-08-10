import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Firebases
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from'angularfire2/database';

import {LugaresService} from './services/lugares.services'

import { LugarComponent } from './lugar/lugar.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicks } from './directives/contarclicks.directive';
import { DetalleComponent } from './detalle/detalle.component';
import { CrearComponent } from './crear/crear.component';
import { LinkifyStrPipe } from './pipes/linkifyStr.pipes'
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './services/autorizacion.services';


const appRouter: Routes = [
  {path:'', component:LugarComponent},
  {path:'lugares', component:AppComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path:'crear', component:CrearComponent},
  {path:'login',component:LoginComponent},
  {path:'registro', component:RegistroComponent}
]

export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LugarComponent,
    ResaltarDirective,
    ContarClicks,
    DetalleComponent,
    CrearComponent,
    LinkifyStrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: ''}),
    RouterModule.forRoot(appRouter),
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  /**Aqui es donde importamos el servicio */
  providers: [LugaresService, AutorizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
