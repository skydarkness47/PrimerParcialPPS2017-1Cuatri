import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Ppt } from '../ppt/ppt';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class Inicio {
  usu = { nombre:'',
        Puntuacion:0,
        gano:false};

      
user : FirebaseListObservable<any[]>;

 constructor(public navCtrl: NavController,af: AngularFire) {
  this.user= af.database.list('/Usuarios');
  
}
Usuario

         Ingreso(){
           
        //  this.user.push({
          //  nombre:this.usu.nombre
        //  })
          this.navCtrl.push(Ppt,this.usu)  
        }
}
