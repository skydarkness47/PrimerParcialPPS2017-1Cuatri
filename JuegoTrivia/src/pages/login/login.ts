import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-about',
  templateUrl: 'login.html'
})
export class Login {



user : FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,private af: AngularFire) {  
  
  }


Login(){
this.user.push({
  nombre:"pepe",
})
  console.log(this.user);
 
}


}
