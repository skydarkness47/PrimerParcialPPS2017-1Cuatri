import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { Inicio } from '../pages/inicio/inicio';
import { TabsPage } from '../pages/tabs/tabs';
import {AngularFireModule} from 'angularfire2';
import {firebaseconfig} from '../pages/firebase/firebase-config';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Grilla } from '../pages/grilla/grilla';
import { TriviaUno } from '../pages/trivia-uno/trivia-uno';
import { TriviaDos } from '../pages/trivia-dos/trivia-dos';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    Inicio,
    Grilla,
    TriviaUno,
    TriviaDos,
    TabsPage    
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
    ContactPage,
    Inicio,
    Grilla,
    TriviaUno,
    TriviaDos,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
