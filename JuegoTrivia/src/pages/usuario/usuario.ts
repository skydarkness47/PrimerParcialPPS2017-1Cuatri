import {Injectable} from '@angular/core';

@Injectable()
export class Usuario {
    Nombre :string;
    Fecha = Date.now();
    Puntaje :number;
    Gano :boolean;

  constructor() {
    this.Nombre = "";
    this.Puntaje =0;
    this.Gano = false;
  }

  setNombre(value){
      this.Nombre =value;
  }
  
  setPuntaje(value){
      this.Puntaje = value;
  }
  setGano(value){
      this.Gano=value;
  }
  getNombre() {
    return this.Nombre;
  }

  getFecha(){
      return this.Fecha;
  }
   getPuntaje(){
       return this.Puntaje;
   }
   getGano(){
       return this.Gano;
   }

}