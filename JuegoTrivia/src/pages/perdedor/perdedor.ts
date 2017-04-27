import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{Estadisticas} from '../estadisticas/estadisticas';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-perdedor',
  templateUrl: 'perdedor.html',
})

export class Perdedor {
  usu = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};
  constructor(public navCtrl: NavController, public NavParams: NavParams,private nativeAudio: NativeAudio) {
    this.usu = this.NavParams.data;
           this.nativeAudio.preloadSimple('perdio', 'assets/sonidos/perdio.mp3'); 
                    this.nativeAudio.play('perdio', () => console.log('bienvenida is done playing'));


    console.info(this.usu);

 setTimeout(() => {
               this.navCtrl.push(Estadisticas,this.usu); 
            }, 4000);

  }
  

}
