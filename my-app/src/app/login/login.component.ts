import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.services';

@Component({
    selector : 'login-root',
    templateUrl : './login.component.html',
})

export class LoginComponent{
   loginParams: any = {}
   constructor(private autotizacionService:AutorizacionService){}
   login(){
       this.autotizacionService.login(this.loginParams.email, this.loginParams.password)
   }
}