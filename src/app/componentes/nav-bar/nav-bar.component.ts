import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  datosMenu = [
    {
      'nombre': 'home',
      'link': '#home'
    },
    {
      'nombre': 'about',
      'link': '#about'
    },
    {
      'nombre': 'experiencia',
      'link': '#experiencia'
    },
    {
      'nombre': 'educacion',
      'link': '#educacion'
    },
    {
      'nombre': 'skills',
      'link': '#skills'
    },
    {
      'nombre': 'porfolio',
      'link': '#porfolio'
    },

  ]
  
  faBars = faBars;

  mostarMenu(){
    const nav = document.querySelector(".nav");
    nav?.classList.toggle("nav-mostrar")
  }



}
