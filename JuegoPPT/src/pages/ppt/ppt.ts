import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ Estadisticas} from '../estadisticas/estadisticas';
import { NativeAudio } from '@ionic-native/native-audio';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
    selector: 'page-ppt',
    templateUrl: 'ppt.html',
})
export class Ppt {

    ronda: any;
    cantRondas: any;
    puntosUser: number;
    puntosMaq: number;
    puntuacion: any;
    gano: any;
    ramOpUser = ["piedra", "papel", "tijera"];
    opMaq: any;
    num: any;
    imgMaq: any;
    jugo: any;
    vJuego: boolean;
    vMaquina: boolean;
    rondas: number;
    imgVS:any;
    vEstadisticas:boolean;
    usu = {
        nombre: '',
        Puntuacion: 0,
        puntosUser: 0,
        puntosMaq: 0,
        gano: ""
    };


    constructor(public navCtrl: NavController, StatusBar: StatusBar, public NavParams: NavParams,private nativeAudio: NativeAudio) {
        this.usu = NavParams.data;
          this.nativeAudio.preloadSimple('fallo', 'assets/sonidos/fallo.mp3');     
          this.nativeAudio.preloadSimple('perdio', 'assets/sonidos/perdio.mp3'); 
           this.nativeAudio.preloadSimple('gano', 'assets/sonidos/gano.mp3'); 
            this.nativeAudio.preloadSimple('ok', 'assets/sonidos/ok.mp3'); 
          
    }

    ionViewDidLoad() {
        this.vEstadisticas=false;
        this.ronda = "preparese para jugar";
        this.puntosMaq = 0;
        this.puntosUser = 0;
        this.imgMaq = "assets/img/maquina.png";
        this.jugo = "LA MAQUINA!"
        this.imgVS = "assets/img/vs.png";
        this.rondas = 0;
        setTimeout(() => {
            this.ronda = "Primera ronda!";
            this.vJuego = true;
            this.vMaquina = true;
        }, 2000);
        console.info(this.rondas);
    }

    Jugo(queJugo) {
        this.vJuego = false;
        this.jugo = "La maquina jugo...";
        this.ComprobarJuego(queJugo);
        if (this.rondas == 1) {
            setTimeout(() => {
                this.ronda = "Segunda ronda!";
                this.imgMaq = "assets/img/maquina.png";
                this.jugo = "LA MAQUINA!"
                this.vJuego = true;
            }, 2000);
        } else if (this.rondas == 2) {
            setTimeout(() => {
                this.ronda = "Tercera ronda!";
                this.imgMaq = "assets/img/maquina.png";
                this.jugo = "LA MAQUINA!"
                this.vJuego = true;
            }, 2000);

        } else if (this.rondas == 3) {
            setTimeout(() => {
                this.ronda = "RONDA FINAL!!";
                this.imgMaq = "assets/img/maquina.png";
                this.jugo = "LA MAQUINA!"
                this.vJuego = true;
            }, 2000);

        } else if (this.rondas == 4) {
            setTimeout(() => {
                this.ronda = "FINAL DEL JUEGO EL GANADOR ES...";
                if(this.puntosMaq> this.puntosUser)
                {
                this.gano=false;
                this.jugo = "LA MAQUINA!";
                this.imgVS = "assets/img/maquina.png";
                this.imgMaq = "assets/img/perdiste.png";
                this.vEstadisticas =true;
            }else if(this.puntosMaq < this.puntosUser){
                this.gano=true;
                   this.jugo = this.usu.nombre;
                this.imgVS = "assets/img/ganaste.png";
                this.imgMaq="assets/img/ganaste_h.png";
                                this.vEstadisticas =true;
                }else if(this.puntosMaq == this.puntosUser){
                    this.gano="EMPATE";
                    this.jugo = "EMPATE!"
                    this.imgVS = "assets/img/ganaste_h.png"
                   this.imgMaq = "assets/img/maquina.png";
                                   this.vEstadisticas =true;
                }
            
            }, 2000);

            this.Estadisticas();
            

        }
    }

    ComprobarJuego(quejuego) {
        this.rondas = this.rondas + 1;
        this.num = Math.floor(Math.random() * 3);
        this.opMaq = this.ramOpUser[this.num];
        console.log(this.opMaq);
        if (quejuego == "piedra") {
            // this.imgElect="assets/img/piedra.jpg";
            if (this.opMaq == "piedra") {
                this.puntosMaq = this.puntosMaq + 1;
                this.puntosUser = this.puntosUser + 1;
            } else if (this.opMaq == "papel") {
                      this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
                this.puntosMaq = this.puntosMaq + 1;
            } else if (this.opMaq == "tijera") {
                      this.nativeAudio.play('ok', () => console.log('bienvenida is done playing'));
                this.puntosUser = this.puntosUser + 1;
            }
        }
        if (quejuego == "papel") {
            if (this.opMaq == "piedra") {
                 this.nativeAudio.play('ok', () => console.log('bienvenida is done playing'));
                this.puntosUser = this.puntosUser + 1;
            } else if (this.opMaq == "papel") {
                this.puntosMaq = this.puntosMaq + 1;
                this.puntosUser = this.puntosUser + 1;
            } else if (this.opMaq == "tijera") {
             this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
                this.puntosMaq = this.puntosMaq + 1;
            }
        }
        if (quejuego == "tijera") {
            if (this.opMaq == "piedra") {
                this.nativeAudio.play('fallo', () => console.log('bienvenida is done playing'));
                this.puntosMaq = this.puntosMaq + 1;
            } else if (this.opMaq == "papel") {
               this.nativeAudio.play('ok', () => console.log('bienvenida is done playing'));
                this.puntosUser = this.puntosUser + 1;
            } else if (this.opMaq == "tijera") {
                this.puntosMaq = this.puntosMaq + 1;
                this.puntosUser = this.puntosUser + 1;
            }
        }

        if (this.opMaq == "piedra") {
            this.imgMaq = "assets/img/piedra.png";
        } else if (this.opMaq == "papel") {
            this.imgMaq = "assets/img/papel.png";
        } else if (this.opMaq == "tijera") {
            this.imgMaq = "assets/img/tijera.png";
        }

        console.log("maq", this.puntosMaq);
        console.log("user", this.puntosUser);
    }

Estadisticas(){
      this.nativeAudio.preloadSimple('perdio', 'assets/sonidos/perdio.mp3'); 
      this.nativeAudio.preloadSimple('gano', 'assets/sonidos/gano.mp3'); 
    this.usu.Puntuacion= this.puntosUser;
    this.usu.puntosMaq= this.puntosMaq;
    this.usu.puntosUser=this.puntosUser;
    if(this.gano == false){
    this.nativeAudio.play('perdio', () => console.log('bienvenida is done playing'));
    this.usu.gano="Perdio";
    }else if(this.gano == "EMPATE"){
        this.usu.gano="Empato";
    }else if(this.gano == true){
    this.nativeAudio.play('gano', () => console.log('bienvenida is done playing'));
    this.usu.gano="Gano";
    }
     setTimeout(() => {
               this.navCtrl.push(Estadisticas,this.usu)  
            }, 4000);
    
}

}



