import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-pipes',
  templateUrl: './directivas-pipes.component.html',
  styleUrls: ['./directivas-pipes.component.css']
})
export class DirectivasPipesComponent {

  activo = 0;
  alumnos = [
    {nombre: "Cesar" },
    {nombre: "Diego" },
    {nombre: "José" },
    {nombre: "Karla" }
  ];

  cursos = [
    {nombre: "Desarrollo de aplicaciones web 2", precio: 8000 },
    {nombre: "Base de datos", precio: 5000 },
    {nombre: "Desarrollo de aplicaciones móviles 1", precio: 10000 },
    {nombre: "Desarrollo de aplicaciones móviles 2", precio: 15000 },
  ];

  fechaActual = new Date();

  mostrarAlumnos(): void {
    this.activo = 0;
  }

  mostrarCursos(): void{
    this.activo = 1;
  }

}
