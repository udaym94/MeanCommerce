import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class RegistrationService {
  response;
  constructor(private _http: Http) { }
  register(user){
    return this._http.post('/register', user).map(response => this.response = response.json());
  }
}
