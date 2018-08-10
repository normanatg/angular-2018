import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class LugaresService{
    API_ENDPOINT = "https://clase-1529722211436.firebaseio.com";
    lugares:any = [
        {id:1,date:1496195466038,plan:"free",cercano:1,name:"Floreria", active:true, des:"Hola mundo https://google.com"},
        {id:2,date:1496195466038,plan:"pay",cercano:1,name:"Donas", active:true , des:"Hola mundo https://google.com"},
        {id:3,date:1496195466038,plan:"free",cercano:2,name:"Deportes", active:true, des:"Hola mundo https://google.com"},
        {id:4,date:1496195466038,plan:"free",cercano:2,name:"Floreria", active:false, des:"Hola mundo https://google.com"},
        {id:5,date:1496195466038,plan:"free",cercano:3,name:"Donas", active:true, des:"Hola mundo https://google.com"},
        {id:6,date:1496195466038,plan:"pay",cercano:3,name:"Deportes", active:false, des:"Hola mundo https://google.com"}
    ]
    constructor(private afdb:AngularFireDatabase, private http:HttpClient){}
    public getLugares(){
        // console.log('hOLA MUDNO')
        // console.log(this.afdb.list('lugares/'));
        // return this.lugares;
        //return this.afdb.list('lugares/')
        return this.http.get(this.API_ENDPOINT+'/lugares.json')
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) =>{ return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar){
        const headers = new HttpHeaders({"Content-Type":"application/json"});
        return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers}).subscribe()
        //this.afdb.database.ref('lugares/'+lugar.id).set(lugar);
        //console.log(lugar);
    }
}