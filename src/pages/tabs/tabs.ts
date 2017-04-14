import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Inicio } from '../inicio/inicio';
import {TriviaUno} from '../trivia-uno/trivia-uno';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Inicio;
  tab2Root = AboutPage;
  tab3Root = TriviaUno;
  

  constructor() {

  }
}
