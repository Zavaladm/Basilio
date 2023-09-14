import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensaje:any;
holaMundo:string  =  '';
  direccion:any;
  colonia:any;
  constructor() {
    

  }

mandarUnMensaje() {
  this.mensaje = 'a';
  console.log(this.mensaje);
}

}
