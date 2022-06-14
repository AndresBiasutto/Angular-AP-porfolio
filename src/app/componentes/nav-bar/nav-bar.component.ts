import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void { }
  
  mostarMenu(){
    const nav = document.querySelector(".nav");
    nav?.classList.toggle("nav-mostrar")
  }

  mostrarLogin(){
    const ventanaLogin = document.querySelector(".login-form");
    
    ventanaLogin?.classList.toggle("login-toggle")
  }
 


}
