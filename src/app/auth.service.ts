import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { JwtModule } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  constructor(private _http: Http) { }

  register(user){
    return this._http.post('/register', user).map(response => this.user = response.json());
  }

  authenticateUser(user){
    return this._http.post('/authenticate', user).map(response => this.user = response);
  }

  logout(){
    localStorage.clear();
  }

  getDashboard(){
    let headers = new Headers();
    // let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this._http.get('/dashboard', {headers: headers}).map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
