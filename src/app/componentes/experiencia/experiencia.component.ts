import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  experiencias = [
      {'imagen': '../assets/img/expimg/cashier.png',
        'h3': 'Atención al cliente',
        'desde': '2002',
        'hasta': '2010',
        'experiencia': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni?'
    },
    {'imagen': '../assets/img/expimg/routine.png',
        'h3': 'Cobrador a domicilio',
        'desde': '2002',
        'hasta': '2010',
        'experiencia': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni?'
    },
    {'imagen': '../assets/img/expimg/guard.png',
        'h3': 'Guardia de seguridad',
        'desde': '2002',
        'hasta': '2010',
        'experiencia': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni?'
    },
    {'imagen': '../assets/img/expimg/production.png',
        'h3': 'Operario Industrial',
        'desde': '2002',
        'hasta': '2010',
        'experiencia': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni?'
    },
    {'imagen': '../assets/img/expimg/janitor.png',
        'h3': 'Operario de servicios',
        'desde': '2002',
        'hasta': '2010',
        'experiencia': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni?'
    }
  ]
    toogleMenu(){
      const cardBox = document.querySelector(".card-box");
      const icono = document.querySelector(".icono-t");

      icono?.classList.toggle("icono")
      cardBox?.classList.toggle("toggle");


    }
  
}
