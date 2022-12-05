interface AlumnoContract {
  nombre: string;
  apellido: string;
  carrera: string;
  fechaDeIngreso: Date;
  boolean: boolean;

}

export class AlumnoModel implements AlumnoContract{

  nombre: string;
  apellido: string;
  carrera: string;
  fechaDeIngreso: Date;
  boolean: boolean;


  constructor(nombre: string, apellido: string, carrera: string, fechaDeIngreso: Date, boolean: boolean)
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.carrera = carrera;
    this.fechaDeIngreso = fechaDeIngreso;
    this.boolean = boolean;
  }

}
