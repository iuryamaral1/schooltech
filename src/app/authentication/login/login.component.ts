import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  loginRequest: LoginRequest;
  error: string;

  constructor(private loginService: LoginService) { 
    this.loginRequest = new LoginRequest();
  }

  login(): void {

    if (!this.loginRequest.password && !this.loginRequest.usernameOrEmail) {
      this.error = "Username and password are required";
      return;
    }

    this.loginService.login(this.loginRequest).subscribe(response => {
      console.log(response);
    });
  }

  hideErrorMessage(): void {
    this.error = null;
  }
}
