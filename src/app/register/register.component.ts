import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerUser: RegistrationService) {}

  ngOnInit() {
  }

  createUser(user: any) {
    alert(user.name + ' ' + user.username + ' ' + user.password + ' ' + user.email);
    // this.http.post('/register',{user},);
    this.registerUser.register(user);
  }
}
