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
        gano: false

    };

  user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public NavParams: NavParams,af: AngularFire) {
      this.user= af.database.list('/UsuariosPpt');
    this.usu = this.NavParams.data;
    console.log(this.usu);
     this.user.push({
           Nombre:this.usu.nombre,
           Puntuacion:this.usu.Puntuacion,
           puntosMaq:this.usu.puntosMaq,
           puntosUser:this.usu.puntosUser,
           Gano:this.usu.gano,
           Fecha:Date.now()
          })
  }
  
 

}
