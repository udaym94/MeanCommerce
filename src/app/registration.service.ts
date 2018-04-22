import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegistrationService {

  constructor(private _http: Http) { }
  register(user){
    alert('2nd ' + user.name + ' ' + user.username + ' ' + user.password + ' ' + user.email);
    this._http.post('/register', (user));
  }
}
