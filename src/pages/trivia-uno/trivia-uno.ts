import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaDos } from '../trivia-dos/trivia-dos';


@Component({
  selector: 'page-trivia-uno',
  templateUrl: 'trivia-uno.html',
})
export class TriviaUno {
  constructor(public navCtrl: NavController) {
  }
Opciones(dato){
    


      if(dato == "2"){
          this.navCtrl.setRoot(TriviaDos);
      }
  
  }

}
