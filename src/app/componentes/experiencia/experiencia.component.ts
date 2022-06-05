import { Component, OnInit } from '@angular/core';
import { PorflolioDataService } from 'src/app/servicios/porflolio-data.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
dataExperiencia:any;

  constructor(private datosExperiencia: PorflolioDataService) { }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatos().subscribe(data =>{
      this.dataExperiencia= data.experiencias;
    })
  }

    toogleMenu(){
      const cardBox = document.querySelector(".card-box");
      const icono = document.querySelector(".icono-t");
      icono?.classList.toggle("icono")
      cardBox?.classList.toggle("toggle");
    }
  
}
