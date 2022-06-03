import { Component, OnInit } from '@angular/core';
import { PorflolioDataService } from 'src/app/servicios/porflolio-data.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosEducacion: PorflolioDataService) { }
dataEducacion:any;
  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data =>{
      this.dataEducacion= data.titulos;
    })
  }

}
