import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scrollBlur()
  }
skills = [
  {'nombre': 'html',
   'icono': 'fab fa-html5',
   'nivel': 'avanzado',
   'class': "animacion"
},
{'nombre': 'css',
 'icono': "fab fa-css3-alt",
 'nivel': 'avanzado',
 'class': "animacion"
},
{'nombre': 'Java Script',
 'icono': 'fab fa-js',
 'nivel': 'avanzado',
 'class': "animacion"
},
{'nombre': 'Angular',
 'icono': 'fa-brands fa-angular',
 'nivel': 'avanzado',
 'class': "animacion"
},
{'nombre': 'SQL',
 'icono': 'fa-solid fa-database',
 'nivel': 'avanzado',
 'class': "animacion"
},
{'nombre': 'Java',
 'icono': 'fa-brands fa-java',
 'nivel': 'avanzado',
 'class': "animacion"
},
]

scrollBlur(){

  window.addEventListener("scroll", ()=>{
    const scrollActual = window.scrollY;      
    const skillSection:any = document.querySelector(".skills")
    const skillCard:any =document.querySelectorAll(".skill")
    const skillsTop = skillSection?.offsetTop;
    const skillBottom = skillSection?.offsetBottom;

       if (scrollActual > skillsTop + 500 ) {
         skillCard[0].style.animationPlayState = "running";
        }
      
        if (scrollActual > skillsTop + 100 ) {
          skillCard[1].style.animationPlayState = "running";
         }

         if (scrollActual > skillsTop + 1500 ) {
          skillCard[2].style.animationPlayState = "running";
         }

         if (scrollActual > skillsTop + 2000 ) {
          skillCard[3].style.animationPlayState = "running";
         }

         if (scrollActual > skillsTop + 2500 ) {
          skillCard[4].style.animationPlayState = "running";
         }

         if (scrollActual > skillsTop + 3000 ) {
          skillCard[5].style.animationPlayState = "running";
         }
         
      
     


  })
 
}
}
