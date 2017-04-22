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


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    Inicio,
    Ppt,
    TabsPage,
    Perdedor,
    Estadisticas,
    Ganador    
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
    Ganador
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
