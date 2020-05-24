import { AuthenticationService } from './../../_services/authentication.service';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './login.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/domain/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  loginRequest: LoginRequest;
  error: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  errorMessage: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar) {
    this.loginRequest = new LoginRequest();
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  async login() {

    if (!this.loginRequest.password && !this.loginRequest.username) {
      this.error = "Username and password are required";
      return;
    }

    this.authenticationService.login(this.loginRequest.username, this.loginRequest.password)
        .subscribe(user => {
            if (user && user.access_token !== undefined) {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              this.router.navigateByUrl('home');
            } else {
              this.router.navigateByUrl('login');
            }
          },
          err => {
            if (err.status === 401) {
              this.errorMessage = 'Login e/ou senha errados. Tente novamente!';
            }

            if (err.status === 500) {
              this.errorMessage = 'Houve um erro ao processar sua requisição. Tente novamente mais tarde!';
            }
            this.openSnackBarMessage();
          }
        );
  }

  hideErrorMessage(): void {
    this.error = null;
  }

  openSnackBarMessage(): void {
    this._snackBar.open(this.errorMessage, null, {
      duration: 5000,
    });
  }
}
