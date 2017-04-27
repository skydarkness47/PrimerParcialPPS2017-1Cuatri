import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { Inicio } from '../inicio/inicio';
import {Ganador} from '../ganador/ganador';
import {Perdedor} from '../perdedor/perdedor';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Antecedentes} from '../antecedentes/antecedentes'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Inicio;
  tab2Root = AboutPage;
  tab3Root = Antecedentes;
  
  

  constructor(NavController: NavController) {
  }
}
