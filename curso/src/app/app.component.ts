import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";
import { AutorizacionService } from './services/autorizacion.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
    trigger('contenedorAnimable',[
        state('inicial',style({
          opacity:0,
          backgroundColor: 'green',
          transform:'rotate3d(0,0,0,0deg)'
        })),
        state('final', style({
          opacity:1,
          backgroundColor: 'yellow',
          transform:'rotate3d(5,10,20,30deg)'
        })),
        transition('inicial => final', animate(1000)),
        transition('final => inicial', animate(500)),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  state = 'inicial';
  loggenIn = false;
  loggedUser : any = null;
  constructor(private autorizacionService:AutorizacionService){
    this.autorizacionService.isLogged()
    .subscribe((res)=>{
      if(res && res.uid){
        this.loggenIn = true;
        console.log(this.loggenIn);
      }else{
        this.loggenIn = false;
      }
    },err=>{
      this.loggenIn = false;
      console.log(err);
    })
    setTimeout(()=>{
      //console.log(this.autorizacionService.getUser());
      this.loggedUser = this.autorizacionService.getUser().currentUser.email;
      //console.log(this.loggedUser);
    }, 1500)
  }
  animar(){
    this.state = (this.state === 'final') ? 'inicial':'final';
  }
  animacionInicia(e){
    console.log(e);
    console.log("Iniciado");
  }
  animacionTermina(e){
    console.log(e);
    console.log("Termiando");
  }
}
