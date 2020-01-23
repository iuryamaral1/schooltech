import { config } from './../../config';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "./login.model";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    private path_login: string = config.URL_PREFFIX + 'api/auth/signin';

    constructor(private http: HttpClient) { }

    login(loginRequest: LoginRequest): Observable<any> {
        return this.http.post(this.path_login, loginRequest);
    }
}