import { Component, OnInit } from '@angular/core';
import { PorflolioDataService } from 'src/app/servicios/porflolio-data.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor( private datosPorfolio:PorflolioDataService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos()
  }

}
