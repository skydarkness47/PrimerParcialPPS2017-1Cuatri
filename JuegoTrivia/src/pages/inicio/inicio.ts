import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { TriviaUno } from '../trivia-uno/trivia-uno';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class Inicio {
  usu = { nombre:'',
        Puntuacion:0,
        gano:false};

      tiempo:any;
user : FirebaseListObservable<any[]>;

 constructor(public navCtrl: NavController,af: AngularFire,private vibration: Vibration,private nativeAudio: NativeAudio) {
  this.user= af.database.list('/Usuarios');
     this.nativeAudio.preloadSimple('bienvenida', 'assets/sonidos/bienvenida.mp3');
      
}
         Ingreso(){
           this.nativeAudio.preloadSimple('bienvenida', 'assets/sonidos/bienvenida.mp3');     
      this.nativeAudio.play('bienvenida', () => console.log('bienvenida is done playing'));
            this.vibration.vibrate(900);
            this.navCtrl.push(TriviaUno,this.usu)  
        }
}
