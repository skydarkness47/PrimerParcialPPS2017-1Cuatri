import { Component } from '@angular/core';

/*
  Generated class for the Preguntas component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'preguntas',
  templateUrl: 'preguntas.html'
})
export class PreguntasComponent {

  text: string;

  constructor() {
    console.log('Hello Preguntas Component');
    this.text = 'Hello World';
  }

}
