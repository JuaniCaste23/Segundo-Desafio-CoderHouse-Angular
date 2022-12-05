import { Component, OnInit } from '@angular/core';
import { AlumnoModel } from 'src/app/model/alumno-model';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

    public alumnos: AlumnoModel[] = [

      new AlumnoModel('Juan','Castelli','Matematica',new Date(2022,10,23),false),
      new AlumnoModel('Seba','Holowaty','Literatura',new Date(2022,10,25),false),
      new AlumnoModel('Ignacio','Gomez','Sistemas',new Date(2022,11,23),true),
      new AlumnoModel('Leonel','Castro','Matematica',new Date(2022,11,21),false),
      new AlumnoModel('Goku','Son','Sistemas',new Date(2022,10,24),true),
      new AlumnoModel('Leonel','Messi','Futbol',new Date(2022,11,11),false)

    ];

    constructor() {}

    ngOnInit(): void {}
}
