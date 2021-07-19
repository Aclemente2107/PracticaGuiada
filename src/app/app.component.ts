import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticaGuiada';

  curso:{
    nombre:string,
    descripcion:string,
    duracion:number,
    costo:number
  };
  cursos=Array();

  btnActRegis:string;
  posicion:number;

  constructor() {
    this.btnActRegis='Registrar';
    this.posicion=0;
    this.curso = {
      nombre:'',
      descripcion:'',
      duracion:0,
      costo:0
    }
    this.cursos = [{nombre:'Java', descripcion:'Curso nivel I', duracion:24, costo:15},
    {nombre:'Oracle', descripcion:'Curso nivel I', duracion:24, costo:12},
    {nombre:'PHP', descripcion:'Curso nivel I', duracion:24, costo:10},
    {nombre:'Java2', descripcion:'Curso nivel II', duracion:42, costo:18}
    ]
  }

  cantCursos(){
    return this.cursos.length>0; 
  }

  registrarCurso(){
    if (this.btnActRegis=='Actualizar') {
      for (let i = 0; i < this.cursos.length; i++) {
        if (this.cursos[i].nombre==this.posicion) {
          this.cursos[i].nombre=this.curso.nombre;
          this.cursos[i].descripcion=this.curso.descripcion;
          this.cursos[i].duracion=this.curso.duracion;
          this.cursos[i].costo=this.curso.costo;

          this.limpiarCampos();

          return;
        }
      }
    }
    else{
      if (this.curso.nombre.length > 0 && 
        this.curso.descripcion.length > 0 &&
        this.curso.duracion > 0 &&
        this.curso.costo > 0) {
      
      for (let x = 0; x < this.cursos.length; x++) {
        if (this.cursos[x].nombre==this.curso.nombre && 
          this.cursos[x].descripcion==this.curso.descripcion &&
          this.cursos[x].duracion==this.curso.duracion &&
          this.cursos[x].costo==this.curso.costo) {
          alert('El curso ya esta registrado');
          return;
        }
      }
      this.cursos.push({nombre:this.curso.nombre,
        descripcion:this.curso.descripcion,
        duracion:this.curso.duracion,
        costo:this.curso.costo
      });
      this.curso.nombre = '';
      this.curso.descripcion = '';
      this.curso.duracion = 0;
      this.curso.costo = 0;
      alert('Curso registrado');
      }
      else{
        alert('Completar los campos');
        return;
      }
    }
  }

  limpiarCampos(){
    this.curso.nombre = '';
    this.curso.descripcion = '';
    this.curso.duracion = 0;
    this.curso.costo = 0;
    this.btnActRegis='Registrar';
  }

  selectCurso(curso:any,id:any){
    this.posicion=curso.nombre;
    this.curso.nombre = curso.nombre;
    this.curso.descripcion = curso.descripcion;
    this.curso.duracion = curso.duracion;
    this.curso.costo = curso.costo;
    this.btnActRegis='Actualizar';
  }

  borrarCurso(curso:any){
    for (let i = 0; i < this.cursos.length; i++) {
      if (this.cursos[i].nombre==curso.nombre) {
        this.cursos.splice(i,1);
        return;
      }
    }
  }
}