import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaDos } from '../trivia-dos/trivia-dos';

interface Alber { something: string; }

@Component({
  selector: 'page-trivia-uno',
  templateUrl: 'trivia-uno.html',
})
export class TriviaUno {

 preguntas : number;
 trivia : string;
puntuacion: number;
 reCorrecta: number;

 
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.trivia = "¿En que año se celebro el pacto de olivos?";
    document.getElementById("opcion1").setAttribute("value","en 1990");
    document.getElementById("opcion2").setAttribute("value","en 1995");
    document.getElementById("opcion3").setAttribute("value","en 1994");   
    this.puntuacion = 0; 
    this.reCorrecta = 3;
    this.preguntas = 1;
  }
  preguntaDos(){
     this.trivia = "¿En que año argentina salio campeon del mundo?";
    document.getElementById("opcion1").setAttribute("value","en 1810");
    document.getElementById("opcion2").setAttribute("value","en 1994");
    document.getElementById("opcion3").setAttribute("value","en 1984");  
     
  }
  preguntaTres(){
      this.trivia = "¿cuando cumple ioni?";
    document.getElementById("opcion1").setAttribute("value","en 1995");
    document.getElementById("opcion2").setAttribute("value","en 1996");
    document.getElementById("opcion3").setAttribute("value","en 1997");  
  }

VerificarPregunta(respuesta){

    if(this.preguntas == 1){
       if(respuesta == 3)
          {
            this.puntuacion = this.puntuacion+1;
            this.preguntas = this.preguntas+1;
            this.preguntaDos();
          }else{
            this.preguntas = this.preguntas+1;
            this.preguntaDos();
          }
     }else if (this.preguntas == 2){
       console.log("estoy en respuesta",respuesta);
             if(respuesta == 3)
                {
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.preguntaTres();
                }else{
                  this.preguntas = this.preguntas+1;
                  this.preguntaTres();
                }
     }else if (this.preguntas ==3){
             if(respuesta == 1)
                {
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  console.info(this.puntuacion);
                }else{
                  this.preguntas = this.preguntas+1;
                 console.info(this.puntuacion);
                }
     }
  
  }



}
