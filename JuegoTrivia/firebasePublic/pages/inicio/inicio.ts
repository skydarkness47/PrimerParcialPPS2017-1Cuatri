import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { TriviaUno } from '../trivia-uno/trivia-uno';
import { Vibration } from '@ionic-native/vibration';


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

 constructor(public navCtrl: NavController,af: AngularFire,private vibration: Vibration) {
  this.user= af.database.list('/Usuarios');
      this.tiempo=1000;
}
         Ingreso(){
       console.log("vibrar"+this.tiempo);

                try {
                  this.vibration.vibrate(parseInt(this.tiempo));
                } catch (error) {
                  console.info("error",error);
                }
          this.navCtrl.push(TriviaUno,this.usu)  
        }
}
