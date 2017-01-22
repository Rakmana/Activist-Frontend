import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  thing: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.authenticated()) {
      console.log(this.authService.userId);
    }
  }
}
