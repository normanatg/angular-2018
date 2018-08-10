import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lat: number = 20.6674686;
  lng: number = -103.3710259;
        /**
         * Recibir valores por ruta
         * 
         */
      //   lugares:any = [
      //     {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
      //     {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
      //     {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
      //     {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
      //     {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
      //     {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'},
      // ];
  id = null;
  lugar:any = {};
  constructor(private route:ActivatedRoute, private lugaresService:LugaresService) {
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = lugaresService.buscarLugar(this.id);
    console.log(this.lugar)
    // console.log(LugaresService.buscarLugar(this.id));
    // this.lugar = LugaresService.buscarLugar(this.id);
    //this.lugares = this.buscarLugar();
  }
  // buscarLugar(){
  //   return this.lugares.filter((lugar) =>{ return lugar.id == this.id})[0] || null;
  // }
  ngOnInit() {
  }

}
