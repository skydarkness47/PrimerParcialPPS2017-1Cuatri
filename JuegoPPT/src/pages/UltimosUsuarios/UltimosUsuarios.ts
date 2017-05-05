import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController,ViewController,NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-UltimosUsuarios',
  templateUrl: 'UltimosUsuarios.html'
})
export class UltimosUsuarios {
      Usuarios : FirebaseListObservable<any[]>;
   usu = { gano:""};
   descripcion ="";
 constructor(public navCtrl: NavController,public params: NavParams,af: AngularFire) {
 this.usu = params.data;
 if(this.usu.gano == "Gano"){
   this.descripcion = "Ganadores";
 this.Usuarios= af.database.list('/UsuariosPpt', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Gano',
    limitToFirst: 5
  }
});
}else  if(this.usu.gano == "Empato"){
   this.descripcion = "Empato";
 this.Usuarios= af.database.list('/UsuariosPpt', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Empato',
    limitToFirst: 5
  }
});
}else if(this.usu.gano == "Perdio"){
     this.descripcion = "Perdedores";
 this.Usuarios= af.database.list('/UsuariosPpt', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Perdio',
    limitToFirst: 5
  }
});
}


}

}
