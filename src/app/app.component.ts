import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontVitalArte';
  constructor(public auth: AuthService){

  }
}
