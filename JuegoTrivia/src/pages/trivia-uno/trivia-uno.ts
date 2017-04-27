import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Ganador} from '../ganador/ganador';
import{Perdedor } from '../perdedor/perdedor';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-trivia-uno',
  templateUrl: 'trivia-uno.html',
})
export class TriviaUno {

 preguntas : number;
 trivia : string;
puntuacion: number;
correctas: number;
incorrectas:number;
 reCorrecta: number;
  usu = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};

 
  constructor(public navCtrl: NavController, public NavParams: NavParams,private nativeAudio: NativeAudio) {
    this.usu = NavParams.data;
          this.nativeAudio.preloadSimple('fallo', 'assets/sonidos/fallo.mp3');
          this.nativeAudio.preloadSimple('ok', 'assets/sonidos/ok.mp3');
           this.nativeAudio.preloadSimple('perdio', 'assets/sonidos/perdio.mp3'); 
           this.nativeAudio.preloadSimple('gano', 'assets/sonidos/gano.mp3'); 

   
  }

  ionViewDidLoad(){

    this.trivia = "¿En que año se celebro el pacto de olivos?";
    document.getElementById("opcion1").setAttribute("value","en 1990");
    document.getElementById("opcion2").setAttribute("value","en 1995");
    document.getElementById("opcion3").setAttribute("value","en 1994");   
    this.puntuacion = 0; 
    this.reCorrecta = 3;
    this.preguntas = 1;
    this.correctas =0;
    this.incorrectas = 0;
  }
  preguntaDos(){
     this.trivia = "¿Quien fue el goleador a nivel internacional en 2016?";
    document.getElementById("opcion1").setAttribute("value","Cristiano ronaldo");
    document.getElementById("opcion2").setAttribute("value","Robert Lewandowski");
    document.getElementById("opcion3").setAttribute("value","Lionel Messi");  
     
  }
  preguntaTres(){
      this.trivia = "¿Quien creo la primera lampara de luz?";
    document.getElementById("opcion1").setAttribute("value","Thomas nider");
    document.getElementById("opcion2").setAttribute("value","Alberto Silguert");
    document.getElementById("opcion3").setAttribute("value","Thomas Alva Ediso");  
  }
  preguntaCuatro(){
      this.trivia = "¿En que año volvió la ultima democracia Argentina?";
    document.getElementById("opcion1").setAttribute("value","en 1995");
    document.getElementById("opcion2").setAttribute("value","en 1983");
    document.getElementById("opcion3").setAttribute("value","en 1975");  
  }
  preguntaCinco(){
      this.trivia = "¿Qué animal tiene en su nombre las cinco vocales?";
    document.getElementById("opcion1").setAttribute("value","el murcielago");
    document.getElementById("opcion2").setAttribute("value","el zorro");
    document.getElementById("opcion3").setAttribute("value","el hipopotamo");  
  }

VerificarPregunta(respuesta){
    if(this.preguntas == 1){
       if(respuesta == 3)
          {
            this.nativeAudio.play('ok', () => console.log('bienvenida is done playing'));
            this.puntuacion = this.puntuacion+1;
            this.preguntas = this.preguntas+1;
            this.correctas = this.correctas+1;
            setTimeout(() => {
              this.preguntaDos();
            }, 1000);
            
          }else{
            this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
            this.preguntas = this.preguntas+1;
            this.incorrectas = this.incorrectas+1;
               setTimeout(() => {
              this.preguntaDos();
                }, 1000)
          }
     }else if (this.preguntas == 2){
       console.log("estoy en respuesta",respuesta);
             if(respuesta == 1)
                {
                  this.nativeAudio.play('ok', () => console.log('bienvenida is done playing'));
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                        setTimeout(() => {
                    this.preguntaTres();
                      }, 1000)
                  
                }else{
                  this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                    setTimeout(() => {
                    this.preguntaTres();
                      }, 1000)
                }
     }else if (this.preguntas ==3){
             if(respuesta == 3)
                {
                  this.nativeAudio.play('ok', () => console.log('bienvenida is done playing'));
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  setTimeout(() => {
                    this.preguntaCuatro();
                      }, 1000)
              }else{
                this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                  setTimeout(() => {
                    this.preguntaCuatro();
                      }, 1000)
                }

     }else if (this.preguntas ==4){
             if(respuesta == 2)
                {
                  this.nativeAudio.play('ok', () => console.log('bienvenida is done playing'));
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                    setTimeout(() => {
                    this.preguntaCinco();
                      }, 1000)
                }else{
                  this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                    setTimeout(() => {
                    this.preguntaCinco();
                      }, 1000)
              }

     }else if (this.preguntas ==5){
             if(respuesta == 1)
                {
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  this.GanoONo();
                 }else{
                   this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
                   this.incorrectas = this.incorrectas+1;
                    this.GanoONo();
                }

     }
  
  }
  GanoONo(){
    if(this.puntuacion>=3)
    {
        this.usu.gano=true;
        this.usu.Puntuacion=this.puntuacion;
        this.usu.incorrectas= this.incorrectas;
        this.usu.Correctas = this.correctas;
               setTimeout(() => {
               this.navCtrl.push(Ganador,this.usu);  
            }, 1000);  


    }else{
       this.usu.gano=false;
        this.usu.Puntuacion=this.puntuacion;
        this.usu.incorrectas= this.incorrectas;
        this.usu.Correctas = this.correctas;
         setTimeout(() => {
               this.navCtrl.push(Perdedor,this.usu);  
            }, 1000);
              
      
    }
  }


}
