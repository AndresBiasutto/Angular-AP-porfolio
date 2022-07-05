import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datoHijo:string = "nodata";
  title = 'porfolio_app';
  ngOnInit(): void {

    }
  funcCambiar(event:string){
    this.datoHijo= event;
    console.log(this.datoHijo, "evento recibido")
  }
}


