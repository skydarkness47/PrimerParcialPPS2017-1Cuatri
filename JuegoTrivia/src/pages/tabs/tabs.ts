import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { Inicio } from '../inicio/inicio';
import {Ppt} from '../ppt/ppt';
import {Ganador} from '../ganador/ganador';
import {Perdedor} from '../perdedor/perdedor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Inicio;
  tab2Root = AboutPage;
  tab3Root = Ppt;
   tab4Root = Ganador;
   tab5Root = Perdedor;
  

  constructor() {

  }
}
