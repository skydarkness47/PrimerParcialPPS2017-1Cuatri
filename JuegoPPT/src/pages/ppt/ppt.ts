import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Ganador} from '../ganador/ganador';
import{Perdedor } from '../perdedor/perdedor';
interface Alber { something: string; }

@Component({
  selector: 'page-ppt',
  templateUrl: 'ppt.html',
})
export class Ppt {

 ronda:any;
 cantRondas:any;
 puntosUser:number;
 puntosMaq:number;
 puntuacion:any;
gano:any;
ramOpUser=["piedra","papel","tijera"];
opMaq:any;
num:any;
imgMaq:any;
jugo:any;
vJuego:boolean;
vMaquina:boolean;
rondas:number;
  usu = { nombre:'',
        Puntuacion:0,
        puntosUser:0,
        puntosMaq:0,
        gano:false};

 
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.usu = NavParams.data;   
  }

  ionViewDidLoad(){
    this.ronda = "preparese para jugar";
    this.puntosMaq=0;
    this.puntosUser=0;
     this.imgMaq="assets/img/maquina.png";
     this.jugo= "LA MAQUINA!"
            this.rondas=0;
     setTimeout(()=>{
           this.ronda = "Primera ronda!";
            this.vJuego=true;
            this.vMaquina =true;
          },2000);
          console.info(this.rondas);
  }

Jugo(queJugo){
this.vJuego=false;
this.jugo = "La maquina jugo...";
this.ComprobarJuego(queJugo);
  if(this.rondas==1){
   setTimeout(()=>{
           this.ronda = "Segunda ronda!";
             this.imgMaq="assets/img/maquina.png";
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);
        }else  if(this.rondas==2){
   setTimeout(()=>{
           this.ronda = "Tercera ronda!";
             this.imgMaq="assets/img/maquina.png";
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);

        }else if(this.rondas==3){
   setTimeout(()=>{
           this.ronda = "RONDA FINAL!!";
             this.imgMaq="assets/img/maquina.png";
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);

        }else  if(this.rondas==4){
   setTimeout(()=>{
           this.ronda = "FINAL DEL JUEGO!!";
             this.imgMaq="assets/img/maquina.png";
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);

        }
}

ComprobarJuego(quejuego){
  this.rondas=this.rondas+1;
 this.num = Math.floor(Math.random() * 3);  
 this.opMaq=this.ramOpUser[this.num];
 console.log(this.opMaq);
 if(quejuego=="piedra")
        {
  // this.imgElect="assets/img/piedra.jpg";
          if (this.opMaq=="piedra")
          {
              this.puntosMaq=this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
          }
          else if (this.opMaq=="papel")
          {
               this.puntosMaq = this.puntosMaq+1;
          }
          else if (this.opMaq=="tijera")
          {
              this.puntosUser=this.puntosUser+1;
          }
        }
       if(quejuego=="papel")
        {
          if (this.opMaq=="piedra")
          {
              this.puntosUser=this.puntosUser+1;
          }
          else if (this.opMaq=="papel")
          {
               this.puntosMaq = this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
          }
          else if (this.opMaq=="tijera")
          {
               this.puntosMaq = this.puntosMaq+1;
          }
        }
       if(quejuego=="tijera")
        {
          if (this.opMaq=="piedra")
          {
               this.puntosMaq = this.puntosMaq+1;
          }
          else if (this.opMaq=="papel")
          {
              this.puntosUser=this.puntosUser+1;
          }
          else if (this.opMaq=="tijera")
          {
               this.puntosMaq = this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
          }
        }

         if (this.opMaq=="piedra")
          {
            this.imgMaq="assets/img/piedra.png";
          }
          else if (this.opMaq=="papel")
          {
            this.imgMaq="assets/img/papel.png";
          }
          else if (this.opMaq =="tijera")
          {
            this.imgMaq="assets/img/tijera.png";
          }

          console.log("maq",this.puntosMaq);
          console.log("user",this.puntosUser);
    }


}



