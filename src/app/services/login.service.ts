import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, throttle } from 'rxjs/operators';
import { IResponseAuth } from '../models/iresponseauth';

@Injectable()
export class LoginService {

  api = 'http://localhost:3200/login';

  constructor(private http: HttpClient) { }

  logar(dadosLogin): Observable<IResponseAuth> {
    return this.http.post<IResponseAuth>(this.api, dadosLogin)
      .pipe(
        tap(response => {
          localStorage.setItem('cmail-token', response.token);
        })
      );
  }
}
