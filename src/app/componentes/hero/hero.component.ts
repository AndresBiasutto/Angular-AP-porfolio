import { Component, OnInit } from '@angular/core';
import { PorflolioDataService } from 'src/app/servicios/porflolio-data.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  dataPorfolio:any;
  nombre:any;
  puesto:any;
  constructor( private datosPorfolio:PorflolioDataService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
      this.dataPorfolio = data;
      this.nombre = this.dataPorfolio.nombre;
      this.puesto = this.dataPorfolio.puesto;
    })
  }

}
