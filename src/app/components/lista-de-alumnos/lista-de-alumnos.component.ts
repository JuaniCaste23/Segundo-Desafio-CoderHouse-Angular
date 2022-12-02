import { Component, OnInit } from '@angular/core';
import { ListaDeAlumnosModel } from 'src/app/model/lista-de-alimnos-model';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

    public alumnos: ListaDeAlumnosModel[] = [

      new ListaDeAlumnosModel('Juan','Castelli','Matematica',false),
      new ListaDeAlumnosModel('Seba','Holowaty','Literatura',false),
      new ListaDeAlumnosModel('Ignacio','Gomez','Sistemas',true),
      new ListaDeAlumnosModel('Leonel','Castro','Matematica',false),
      new ListaDeAlumnosModel('Goku','Son','Sistemas',true),
      new ListaDeAlumnosModel('Leonel','Messi','Futbol',false)

    ]

    constructor() {}


    ngOnInit(): void {}
}
