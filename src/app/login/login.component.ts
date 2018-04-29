import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  authUser(data: any){
    this.loginService.authenticateUser(data).subscribe(response => this.result = response.json());
  }
}
