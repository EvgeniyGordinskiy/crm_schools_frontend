import { Component } from '@angular/core';



import {AuthFacade} from '@app/facades/auth/authFacade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    authFacade: AuthFacade
  ) {
    authFacade.updateStore();
  }
}
