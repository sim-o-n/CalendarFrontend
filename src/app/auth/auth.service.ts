import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import "rxjs-compat/add/operator/map";
import "rxjs-compat/add/operator/do";

@Injectable()
export class AuthService {


  jwt$: BehaviorSubject<string>;
  domain = '';

  constructor(private http: HttpClient) {
    this.jwt$ = new BehaviorSubject<string>(null);
  }

  public login(email, password) {
    let body = `email=${email}&password=${password}`;
    return this.http.post(
      this.domain + '/login', body, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}
    ).do((answer: any) => this.jwt$.next(answer.token));
  }

  public signup(user) {
    let body = `name=${user.name}&password=${user.password}&region=${user.region}&email=${user.email}`;

    return this.http.post(
      this.domain + '/signup',
      body, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }


  public logout() {
    this.jwt$.next(null);
  }


}
