import { Component } from '@angular/core';
import { Students } from './common/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo-1';
  // students : Students = {
  //   name : 'Gillz',
  //   age : 20,
  //   email: 'asdf@gmail.com'
  // }
}
