import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class Estadisticas {
   usu = {
        nombre: '',
        Puntuacion: 0,
        puntosUser: 0,
        puntosMaq: 0,
        gano: ''
    };
    Gano:string;
fecha:string;
dato:any;
  user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public NavParams: NavParams,af: AngularFire) {
      this.user= af.database.list('/UsuariosPpt');
      console.log(this.NavParams.data);
      this.fecha = new Date().toString();
    this.usu = this.NavParams.data;
     this.user.push({
           fecha:this.fecha,
           Nombre:this.usu.nombre,
           Puntuacion:this.usu.Puntuacion,
           PuntosMaq:this.usu.puntosMaq,
           PuntosUser:this.usu.puntosUser,
           Gano:this.usu.gano
          })
  }
  
 

}
