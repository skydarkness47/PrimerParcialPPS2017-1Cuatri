import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/Rx'; 
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-contact',
  templateUrl: 'grilla.html'
})


export class Grilla {



// ITEMS DE FIREBASE
listaBD = {};
items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,public http: Http,private af: AngularFire) {
        this.items = af.database.list('/Usuarios');
    this.http.get("http://jaguirrepp.esy.es/ws1/usuarios")
  .map(res => res.json())
  .subscribe((quote) =>{
    this.listaBD = quote;
    console.info(this.listaBD);
  });
  }

}
