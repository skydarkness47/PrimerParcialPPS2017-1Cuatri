import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { Inicio } from '../pages/inicio/inicio';
import { TabsPage } from '../pages/tabs/tabs';
import {AngularFireModule} from 'angularfire2';
import {firebaseconfig} from '../pages/firebase/firebase-config';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Ppt } from '../pages/ppt/ppt';
import {Ganador} from '../pages/ganador/ganador';
import {Perdedor} from '../pages/perdedor/perdedor';
import{Estadisticas} from '../pages/estadisticas/estadisticas';
import { NativeAudio } from '@ionic-native/native-audio';
import {Antecedentes} from '../pages/antecedentes/antecedentes';
import {UltimosUsuarios} from '../pages/UltimosUsuarios/UltimosUsuarios';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    Inicio,
    Ppt,
    TabsPage,
    Perdedor,
    Estadisticas,
    Antecedentes,
    Ganador,
    UltimosUsuarios
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseconfig)
     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    Inicio,
    Ppt,
    TabsPage,
    Perdedor,
    Estadisticas,
    Antecedentes,
    Ganador,
    UltimosUsuarios
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
