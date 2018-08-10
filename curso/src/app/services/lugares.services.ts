import {Injectable} from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class LugaresService{
    API_ENDPOINT = "https://clase-1529722211436.firebaseio.com";
    lugares:any = [
        {id: 1,date:1496195466038, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia',descripcion:"Hola mundo"},
        {id: 2,date:1496195466038, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita',descripcion:"Recuerda visitarnos en facebook https://facebook.com"},
        {id: 3,date:1496195466038, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices',descripcion:"Hola mundo"},
        {id: 4,date:1496195466038, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll',descripcion:"Hola mundo"},
        {id: 5,date:1496195466038, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia',descripcion:"Hola mundo"},
        {id: 6,date:1496195466038, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo',descripcion:"Hola mundo"},
    ];
    //Crear la instalcia para http y firebases
    constructor(private afdb:AngularFireDatabase, private http:HttpClient){}
    public getLugares(){
        //return this.lugares;
        //return this.afdb.list('lugares/');
        return this.http.get(this.API_ENDPOINT+'/lugares.json')

        //Forsar error
        //return this.http.get(this.API_ENDPOINT+'/lugares.js')
    }
    public buscarLugar(id){
        return this.lugares.filter((lugar) =>{ return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar){
        //Guardad los datos en firebases
        //this.afdb.database.ref('lugares/1').set(lugar);
        //this.afdb.database.ref('lugares/'+lugar.id).set(lugar);

        //Guardar datos por metodo post
        const headers = new HttpHeaders({"Content-Type":"application/json"})
        return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers}).subscribe();
    }
}