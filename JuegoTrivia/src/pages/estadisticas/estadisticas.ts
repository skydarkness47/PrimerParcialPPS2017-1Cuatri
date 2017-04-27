import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class Estadisticas {
  usu = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};
  Gano={};

  user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public NavParams: NavParams,af: AngularFire) {
      this.user= af.database.list('/UsuariosTrivia');
    this.usu = this.NavParams.data;
     
    if(this.usu.gano==true){
      this.Gano="Gano";
    }else{
      this.Gano="Perdio";
    }

     this.user.push({
           Nombre:this.usu.nombre,
           Puntuacion:this.usu.Puntuacion,
           Correctas:this.usu.Correctas,
           Incorrectas:this.usu.incorrectas,
           Gano:this.Gano
          })
  }
  
 

}
