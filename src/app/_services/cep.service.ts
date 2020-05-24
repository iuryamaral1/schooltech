import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class CepService {

    constructor(private http: HttpClient) { }

    infoFromCep(cep: string): Observable<any> {
        return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
}