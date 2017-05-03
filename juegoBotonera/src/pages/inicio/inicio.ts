import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class Inicio {
 





 constructor(public navCtrl: NavController,private nativeAudio: NativeAudio) {
               this.nativeAudio.preloadSimple('tigre', 'assets/sonidos/tigre.mp3');
               this.nativeAudio.preloadSimple('mono', 'assets/sonidos/mono.mp3');
               this.nativeAudio.preloadSimple('cerdo', 'assets/sonidos/cerdo.mp3');
               this.nativeAudio.preloadSimple('gallo', 'assets/sonidos/gallo.mp3');
               this.nativeAudio.preloadSimple('buho', 'assets/sonidos/buho.mp3');
               this.nativeAudio.preloadSimple('vaca', 'assets/sonidos/vaca.mp3');
               this.nativeAudio.preloadSimple('zorro', 'assets/sonidos/zorro.mp3');
               this.nativeAudio.preloadSimple('tortuga', 'assets/sonidos/tortuga.mp3');
               this.nativeAudio.preloadSimple('elefante', 'assets/sonidos/elefante.mp3');
               this.nativeAudio.preloadSimple('perro', 'assets/sonidos/perro.mp3');
               this.nativeAudio.preloadSimple('gato', 'assets/sonidos/gato.mp3');
               this.nativeAudio.preloadSimple('pinguino', 'assets/sonidos/pinguino.mp3');

           
 }

 Sonido(queSonido){
   if(queSonido == "tigre"){
      this.nativeAudio.play('tigre', () => console.log('bienvenida is done playing'));    
   }else if (queSonido == "tigre"){
           this.nativeAudio.play('tigre', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "gallo"){
           this.nativeAudio.play('gallo', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "cerdo"){
           this.nativeAudio.play('cerdo', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "buho"){
           this.nativeAudio.play('buho', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "vaca"){
           this.nativeAudio.play('vaca', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "zorro"){
           this.nativeAudio.play('zorro', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "tortuga"){
           this.nativeAudio.play('tortuga', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "elefante"){
           this.nativeAudio.play('elefante', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "pinguino"){
           this.nativeAudio.play('pinguino', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "perro"){
           this.nativeAudio.play('perro', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "gato"){
           this.nativeAudio.play('gato', () => console.log('bienvenida is done playing'));    

   }else if (queSonido == "mono"){
           this.nativeAudio.play('mono', () => console.log('bienvenida is done playing'));    

   }
 }

         
}
