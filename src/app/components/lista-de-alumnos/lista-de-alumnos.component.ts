import { Component, OnInit } from '@angular/core';
import { ListaDeAlumnosModel } from 'src/app/model/lista-de-alimnos-model';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

    public alumnos: ListaDeAlumnosModel[] = [

      new ListaDeAlumnosModel('Juan','Castelli','Matematica',new Date(2022,10,23),false),
      new ListaDeAlumnosModel('Seba','Holowaty','Literatura',new Date(2022,10,25),false),
      new ListaDeAlumnosModel('Ignacio','Gomez','Sistemas',new Date(2022,11,23),true),
      new ListaDeAlumnosModel('Leonel','Castro','Matematica',new Date(2022,11,21),false),
      new ListaDeAlumnosModel('Goku','Son','Sistemas',new Date(2022,10,24),true),
      new ListaDeAlumnosModel('Leonel','Messi','Futbol',new Date(2022,11,11),false)

    ]

    constructor() {}


    ngOnInit(): void {}
}
