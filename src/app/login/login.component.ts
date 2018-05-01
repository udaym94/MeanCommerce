import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
// import { DomSanitizer } from '@angular/platform-browser';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authToken;
  user;
  constructor(
    private authService: AuthService,
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  authUser(data: any){
    this.authService.authenticateUser(data).subscribe( (response) => 
    {
      this.user = response.json();
      if(this.user.success == true){
        this.authService.storeUserData(this.user.token, this.user.user);
        this.flashMessage.show('Login Successfull, taking you to Dashboard',{cssClass: 'alert alert-success col-md-6 offset-md-3',timeOut:3000});
        this.router.navigate(['dashboard']);
      }
      else if(this.user.success == false){
        this.flashMessage.show(this.user.msg,{cssClass: 'alert alert-danger col-md-6 offset-md-3',timeOut:5000});
        this.router.navigate(['login']);
      }
    });
  }
}
