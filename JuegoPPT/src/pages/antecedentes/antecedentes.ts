import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Ppt } from '../ppt/ppt';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-Antecedemtes',
  templateUrl: 'antecedentes.html'
})
export class Antecedentes {
      
USUARIOS : FirebaseListObservable<any[]>;

 constructor(public navCtrl: NavController,af: AngularFire,private nativeAudio: NativeAudio) {
  this.USUARIOS= af.database.list('/UsuariosPpt');
    }

}