import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  registro:any = {}
  constructor(private autorizacionService:AutorizacionService){}
  login(){
    this.autorizacionService.login(this.registro.email, this.registro.password)
  }
}