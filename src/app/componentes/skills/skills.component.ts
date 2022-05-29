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
  }
skills = [
  {'nombre': 'html',
   'icono': 'fab fa-html5',
   'nivel': 'avanzado'
},
{'nombre': 'css',
 'icono': "fab fa-css3-alt",
 'nivel': 'avanzado'
},
{'nombre': 'Java Script',
 'icono': 'fab fa-js',
 'nivel': 'avanzado'
},
{'nombre': 'Angular',
 'icono': 'fa-brands fa-angular',
 'nivel': 'avanzado'
},
{'nombre': 'SQL',
 'icono': 'fa-solid fa-database',
 'nivel': 'avanzado'
},
{'nombre': 'Java',
 'icono': 'fa-brands fa-java',
 'nivel': 'avanzado'
},
]
}
