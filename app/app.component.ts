import { Component } from '@angular/core';

// load second component under root component
import { TutorialsComponent } from './tutorials.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
            <my-tutorials></my-tutorials>`, // add meta data
  directives: [TutorialsComponent],
  styles :[
    `h1{
        color : red;
    }`
  ]
})
export class AppComponent { }
