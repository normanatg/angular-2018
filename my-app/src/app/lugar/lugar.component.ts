import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.services';

@Component({
    selector : 'lugar-root',
    templateUrl : './lugar.component.html',
    styleUrls: ['./lugar.component.css']
})

export class LugarComponent{
    title = 'lugar';
    disabled =  false;
    name:string = 'Pepe';
    // lugares:any = [
    //     {id:1,date:1496195466038,plan:"free",cercano:1,name:"Floreria", active:true, des:"Hola mundo https://google.com"},
    //     {id:2,date:1496195466038,plan:"pay",cercano:1,name:"Donas", active:true , des:"Hola mundo https://google.com"},
    //     {id:3,date:1496195466038,plan:"free",cercano:2,name:"Deportes", active:true, des:"Hola mundo https://google.com"},
    //     {id:4,date:1496195466038,plan:"free",cercano:2,name:"Floreria", active:false, des:"Hola mundo https://google.com"},
    //     {id:5,date:1496195466038,plan:"free",cercano:3,name:"Donas", active:true, des:"Hola mundo https://google.com"},
    //     {id:6,date:1496195466038,plan:"pay",cercano:3,name:"Deportes", active:false, des:"Hola mundo https://google.com"}
    // ]
    lugares=null;
    constructor(private lugaresService:LugaresService){
        // this.lugares = lugaresService.getLugares();
        // console.log(this.lugares);
        lugaresService.getLugares().subscribe(lugares=>{
            
            this.lugares = Object.keys(lugares).map( (key) =>lugares[key]);
            // console.log("Objeto",Object.keys(lugares));
            // this.lugares = lugares;
            // debugger;
            console.log(this.lugares);
        }, error=>{
            alert("Tenemos algo de dificultad. Error:"+error.statusText);
            console.log(error);
        })

        // lugaresService.getLugares().valueChanges().subscribe(lugares=>{
        //     console.log(lugares);
        //     this.lugares = lugares;
        // })
        setTimeout(() =>{
            this.disabled = true;
        },3000);
    }
    click(){
        alert("Hola");
    }
}