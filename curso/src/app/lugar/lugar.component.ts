import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.services';

@Component({
    selector    : 'lugar-root',
    templateUrl : './lugar.component.html',
    styleUrls   : ['./lugar.component.css']
})

export class LugarComponent{
    title = "Hola";
    listo = false;
    name:string = '';
    lugares = null;
    constructor(private lugaresService:LugaresService){
        //this.lugares = lugaresService.getLugares();
       lugaresService.getLugares().subscribe(lugares =>{
           //object for array javascript ec6
           this.lugares = Object.keys(lugares).map( (key) =>lugares[key]);
           //Error for object
           //this.lugares = lugares
       }, error =>{
           console.log(error)
           alert("Tenemos algo de dificultades. Error:"+error.statusText);
       })
        //Lugares consulta a tracez de firebases
        // lugaresService.getLugares().valueChanges().subscribe(lugares =>{
        //         this.lugares = lugares;
        //     })
        setTimeout(()=> {
            this.listo = true;
        },3000);
    }
    click(){
        alert("Hola");
    }
}