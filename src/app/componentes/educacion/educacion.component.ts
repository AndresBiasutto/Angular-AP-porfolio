import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulos = [
  {
    'imagen': '../assets/img/eduimg/logo-isada.png',
    'institucion': 'Instituto Isada',
    'desde': '2020',
    'hasta': '2022',
    'titulo': 'Secundario',
    'habilidades': ["Bachiller con Orientación en Economía y Administración"]
  },
  {
    'imagen': '../assets/img/eduimg/logo-udemy.png',
    'institucion': 'Udemy',
    'desde': '2018',
    'hasta': '2019',
    'titulo': 'Desarrollador Front End Jr.',
    'habilidades': ["Diseño web UX/UI", "Maquetación de sitios web reactivos", "Desarrollo con HTML5, CCS3 Y Java Script"]
  },
  {
    'imagen': '../assets/img/eduimg/logo-ap.png',
    'institucion': 'Argentina Programa',
    'desde': '2021',
    'hasta': 'Actualmente en curso',
    'titulo': 'Desarrollador Web Full Stack Jr.',
    'habilidades': [
      "Front end estático con HTML5, CSS3 Y JS",
      "Front end Dinámico con Angular",
      "Bases de datos SQL",
      "Programación orientada a objetos",
      "Back End con java Spring boot"
      ]
}
]
}
