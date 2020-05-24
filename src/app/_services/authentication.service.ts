import { User } from './../domain/user.model';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

    private path_login: string = config.URL_PREFFIX + 'api/auth/signin';

    constructor(private readonly http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }

    login(usernameOrEmail: string, password: string): Observable<any> {
        return this.http.post<User>(this.path_login, { usernameOrEmail, password });
    }

    logout() {
        localStorage.setItem('currentUser', null);
        this.currentUserSubject = null;
    }
}