import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { LugarComponent } from "./lugar/lugar.component";
import { ResaltarDirective } from "./directives/resaltar.directive";
import { ContarClicks } from "./directives/contarclicks.directive";
import { DetallesComponent } from "./detalles/detalles.component";
import { AgmCoreModule } from "@agm/core";
import { CrearComponent } from "./crear/crear.component";
import { LinkifyStrPipe } from "./pipes/linkifyStr.pipes";

import { LugaresService } from "./services/lugares.services";

//Firebases
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { LoginComponent } from "./login/login.component";
import { RegistroComponent } from "./registro/registro.component";
import { AutorizacionService } from "./services/autorizacion.services";

export const environment = {
  production: false,
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
};

const appRouter: Routes = [
  { path: "", component: DetallesComponent },
  { path: "lugares", component: LugarComponent },
  { path: "detalles/:id", component: DetallesComponent },
  { path: "crear", component: CrearComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent }
];

//Declara un modulo en Angular
//Se tiene 4 Arrays
@NgModule({
  //Agregar un componen Seccion de una app en nuestro modulo
  declarations: [
    AppComponent,
    LugarComponent,
    ResaltarDirective,
    ContarClicks,
    DetallesComponent,
    LinkifyStrPipe,
    CrearComponent,
    LoginComponent,
    RegistroComponent
  ],
  //Llamar a todos los modules que se requieren en la app
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: "" }),
    RouterModule.forRoot(appRouter),
    AngularFireModule.initializeApp(environment.firebase, "my-app-name"),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  //Servicios que vamos a ir usando
  providers: [LugaresService, AutorizacionService],
  //Componente con el que vamos a iniciar
  bootstrap: [AppComponent]
})
export class AppModule {}
