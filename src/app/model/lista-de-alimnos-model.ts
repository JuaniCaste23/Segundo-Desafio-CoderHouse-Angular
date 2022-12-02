interface AlumnosContract {
  firstName: string;
  lastName: string;
  carrera: string;
  boolean: boolean;

}

export class ListaDeAlumnosModel implements AlumnosContract{

  firstName: string;
  lastName: string;
  carrera: string;
  boolean: boolean;


  constructor(firstName: string, lastName: string, carrera: string, boolean: boolean)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.carrera = carrera;
    this.boolean = boolean;
  }

}
