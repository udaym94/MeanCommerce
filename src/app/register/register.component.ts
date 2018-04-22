import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl,Form,FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: Http) {}

  ngOnInit() {
  }

  createUser(user: any) {
    alert(user.name + ' ' + user.username + ' ' + user.password + ' ' + user.email);
    // this.http.post('/register',{user},);
  }
}
