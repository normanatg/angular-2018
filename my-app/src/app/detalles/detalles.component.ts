import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.services';

@Component({
    selector : 'detalles-root',
    templateUrl : './detalles.component.html',
    styleUrls: ['./detalles.component.css']
})

export class DetallesComponent{
    lat: number = 20.6674686;
    lng: number = -103.3688372;
    id = null;
    lugar: any = {};
    constructor( private router:ActivatedRoute, private lugaresService:LugaresService){
        this.id = this.router.snapshot.params['id'];
        // this.lugar = lugaresService.buscarLugar(this.id)
        // console.log( lugaresService.buscarLugar(this.id));
    }
}