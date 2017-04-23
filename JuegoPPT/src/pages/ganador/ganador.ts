import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{Estadisticas} from '../estadisticas/estadisticas';

@Component({
  selector: 'page-ganador',
  templateUrl: 'ganador.html',
})
export class Ganador {

usu = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.usu = this.NavParams.data;

    console.info(this.usu);
  }

Estadisticas(){
  this.navCtrl.push(Estadisticas,this.usu);
}

}
