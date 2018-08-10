import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database'
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()

export class AutorizacionService{
    API_ENDPOINT = "https://clase-1529722211436.firebaseio.com";
    constructor(private angularFireAuth:AngularFireAuth, private http:HttpClient){}

    public login = (email, password)=>{
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(rep=>{
            alert("Usuario Entro")
            console.log(rep);
        })
        .catch(err=>{
            alert("Algo fallo")
            console.log(err)
        })
    }
    public registro(email, password){
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(rep => {
            alert("Usuario registrado");
            const headers = new HttpHeaders({"Content-Type":"application/json"});
        return this.http.post(this.API_ENDPOINT+'/Usuarios.json', {"id":1234}, {headers:headers}).subscribe()
            console.log(rep)
        })
        .catch(err=>{
            alert("Algo fallo");
            console.log(err)
        })
    }
    public isLogged(){
        return this.angularFireAuth.authState;
    }
    public getUser(){
        return this.angularFireAuth.auth
    }
    public logut(){
        this.angularFireAuth.auth.signOut();
        alert("Sesiín cerrada");
    }
}