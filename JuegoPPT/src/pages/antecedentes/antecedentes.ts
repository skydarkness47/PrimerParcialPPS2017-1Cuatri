import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController,ViewController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Ppt } from '../ppt/ppt';
import { NativeAudio } from '@ionic-native/native-audio';
import { ModalController } from 'ionic-angular';
import {UltimosUsuarios} from '../UltimosUsuarios/UltimosUsuarios';

@Component({
  selector: 'page-Antecedentes',
  templateUrl: 'antecedentes.html'
})
export class Antecedentes {
          usu = { gano: ""};
UsuGano : FirebaseListObservable<any[]>;
UsuPerdio : FirebaseListObservable<any[]>;
UsuEmpato : FirebaseListObservable<any[]>;


 constructor(public navCtrl: NavController,af: AngularFire,public viewCtrl:
  ViewController,private nativeAudio: NativeAudio,public modalCtrl: ModalController) {
  this.UsuGano= af.database.list('/UsuariosPpt', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Gano',
    limitToFirst: 5
  }
});
this.UsuPerdio= af.database.list('/UsuariosPpt', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Perdio',
     limitToFirst: 5
  }
});
this.UsuEmpato= af.database.list('/UsuariosPpt', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Empato',
     limitToFirst: 5
  }
});

    }

AbrirModal(Usuario){
  console.log(Usuario);
  if(Usuario == "Empato"){
    this.usu.gano="Empato";
  let modal = this.modalCtrl.create(UltimosUsuarios,this.usu);
      modal.present();
  }else  if(Usuario == "Gano"){
    this.usu.gano="Gano";
  let modal = this.modalCtrl.create(UltimosUsuarios,this.usu);
      modal.present();
  }else  if(Usuario == "Perdio"){
    this.usu.gano="Perdio";
  let modal = this.modalCtrl.create(UltimosUsuarios,this.usu);
      modal.present();
  }
   
}
   
   dismiss() {
    this.viewCtrl.dismiss();
  }

}
