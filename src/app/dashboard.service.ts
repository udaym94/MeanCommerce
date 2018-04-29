import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DashboardService {
  userDetails;
  purchaseDetails;
  constructor(private _http: Http) { }

  getUserDetails(){
    return this._http.get('/dashboard').map(response => this.userDetails = response.json().data, console.log('Service ' + this.userDetails));
  }

}
