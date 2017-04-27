import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Ppt } from '../ppt/ppt';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class Inicio {
  usu = { nombre:'',
        Puntuacion:0,
        gano:false};

      
user : FirebaseListObservable<any[]>;

 constructor(public navCtrl: NavController,af: AngularFire,private nativeAudio: NativeAudio) {
               this.nativeAudio.preloadSimple('bienvenida', 'assets/sonidos/bienvenida.mp3');
console.info(this.getDay());
}
getDay()
    {
        var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day = new Date();
        var TodayDay = Wday[day.getDay()];   
        var span = document.createElement("span");
        span.style.color = "Blue";
        span.innerText = "getDay Method \n Today Day is-> " + TodayDay + "\n";
        document.body.appendChild(span);
    }

         Ingreso(){
            this.nativeAudio.play('bienvenida', () => console.log('bienvenida is done playing'));
          this.navCtrl.push(Ppt,this.usu)  
        }
}
