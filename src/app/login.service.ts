import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  response;
  constructor(private _http: Http) { }
  authenticateUser(user){
    return this._http.post('/authenticate', user).map(response => this.response = response);
  }

}
