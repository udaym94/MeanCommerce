import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { JwtModule } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
// import { JwtHelperService } from '@auth0/angular-jwt';

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

  loggedIn() {
    // console.log('loggedIn called');
    if(localStorage.getItem('id_token')){
      let savedToken = localStorage.getItem('id_token');
      return this._http.post('/verifytoken', savedToken);
    }else{
      return false;
    }
  }

  logout() {
    this.authToken = null;
    this.user = null;
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

  updateUserSettings(user){
    return this._http.put('/updateUserSettings',user).map(response => user = response.json().data);
  }

}
