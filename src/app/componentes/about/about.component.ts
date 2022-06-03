import { Component, OnInit } from '@angular/core';
import { PorflolioDataService } from 'src/app/servicios/porflolio-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dataPorfolio:any;
  constructor( private datosPorfolio:PorflolioDataService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
      this.dataPorfolio = data;
    })
  }
}
