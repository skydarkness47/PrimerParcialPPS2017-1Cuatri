import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class Inicio {
ultimoSonido : any;
 constructor(public navCtrl: NavController,private nativeAudio: NativeAudio, private fs: File) {
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
               console.log(fs.dataDirectory);
 }

 Sonido(queSonido){
   if(queSonido == "tigre"){
           this.remover();
      this.nativeAudio.play('tigre', () => console.log('bienvenida is done playing'));  
      this.ultimoSonido = "this.nativeAudio.play('tigre', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "gallo"){
           this.remover();
           this.nativeAudio.play('gallo', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('gallo', () => console.log('bienvenida is done playing'))";
   }else if (queSonido == "cerdo"){
           this.remover();
           this.nativeAudio.play('cerdo', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('cerdo', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "buho"){
           this.nativeAudio.play('buho', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('buho', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "vaca"){
           this.remover();
           this.nativeAudio.play('vaca', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('vaca', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "zorro"){
           this.remover();
           this.nativeAudio.play('zorro', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('zorro', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "tortuga"){
           this.remover();
           this.nativeAudio.play('tortuga', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('tortuga', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "elefante"){
           this.remover();
           this.nativeAudio.play('elefante', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('elefante', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "pinguino"){
                       this.remover();
           this.nativeAudio.play('pinguino', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.n tiveAudio.play('pinguino', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "perro"){
            this.remover();
           this.nativeAudio.play('perro', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('perro', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true);
   }else if (queSonido == "gato"){
           this.remover();
           this.nativeAudio.play('gato', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('gato', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true); 
   }else if (queSonido == "mono"){
            this.nativeAudio.play('mono', () => console.log('bienvenida is done playing'));    
           this.ultimoSonido = "this.nativeAudio.play('mono', () => console.log('bienvenida is done playing'))";
           this.fs.writeFile(this.fs.externalDataDirectory,"ultimoBoton.txt",this.ultimoSonido,true); 
   }
 }

      remover(){
           this.fs.removeFile(this.fs.externalDataDirectory,"ultimoBoton.txt");
      }
}
