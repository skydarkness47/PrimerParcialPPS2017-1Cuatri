import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{Estadisticas} from '../estadisticas/estadisticas';
import { NativeAudio } from '@ionic-native/native-audio';

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
  constructor(public navCtrl: NavController, public NavParams: NavParams,private nativeAudio: NativeAudio) {
    this.usu = this.NavParams.data;
           this.nativeAudio.preloadSimple('gano', 'assets/sonidos/gano.mp3'); 
            this.nativeAudio.play('gano', () => console.log('bienvenida is done playing'));

    setTimeout(() => {
               this.navCtrl.push(Estadisticas,this.usu); 
            }, 4000);
  }



}
