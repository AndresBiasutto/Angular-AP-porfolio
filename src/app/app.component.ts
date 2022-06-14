import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datoHijo:string = "nodata";
  title = 'porfolio_app';
  ngOnInit(): void {

    this.scrollBlur()
    }

  scrollBlur(){
    const about:any= document.querySelector(".about");
    const experiencia:any= document.querySelector(".experiencia");
    const educacion:any= document.querySelector(".educacion");
    const skills:any= document.querySelector(".skills");
    const porfolio:any= document.querySelector(".porfolio");

    window.addEventListener("scroll", ()=>{
      const scrollActual = window.scrollY;      
      const aboutTop= about?.offsetTop;
      const experienciaTop= experiencia?.offsetTop;
      const educacionTop= educacion?.offsetTop;
      const skillsTop= skills?.offsetTop;
      const porfolioTop= porfolio?.offsetTop;
      

        if (scrollActual > (aboutTop - 200)) {
          about.style.animationPlayState = "running";
        }
        if (scrollActual > (experienciaTop - 200)) {
          experiencia.style.animationPlayState = "running";
        }
        if (scrollActual > (educacionTop - 200)) {
          educacion.style.animationPlayState = "running";
        }
        if (scrollActual > (skillsTop - 200)) {
          skills.style.animationPlayState = "running";
        }
        if (scrollActual > (porfolioTop - 200)) {
          porfolio.style.animationPlayState = "running";
        }
    })
   
  }
  funcCambiar(event:string){
    this.datoHijo= event;
    console.log(this.datoHijo, "evento recibido")
  }
}


