import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('login');
  }
}
