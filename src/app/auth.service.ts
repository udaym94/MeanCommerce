import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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

  }

  storeUserData(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

}
