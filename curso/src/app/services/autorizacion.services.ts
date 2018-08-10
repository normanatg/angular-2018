import {Injectable} from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AutorizacionService{
    constructor(private angularFireAuth:AngularFireAuth){
        this.isLogged();
    }
   public login = (email, password) =>{
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
        .then(rep=>{
            alert("Usuario Entro")
            console.log(rep);
        })
        .catch(err=>{
            alert("Algo fallo")
            console.log(err);
        })
   }
   public registro = (email, password) =>{
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(rep=>{
                alert("Usuario registrado")
                console.log(rep);
            })
            .catch(err=>{
                alert("Algo fallo")
                console.log(err);
            })
    }
    public isLogged(){
        return this.angularFireAuth.authState;
    }
    public getUser(){
        return this.angularFireAuth.auth;
    }
    public logout(){
        this.angularFireAuth.auth.signOut();
        alert('Sesión Cerrada');
        this.router.navigate(['lugares']);
    }
}