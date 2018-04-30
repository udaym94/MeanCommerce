import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message;
  outputMsg:any;
  constructor(private registerUser: RegistrationService, private http: Http, private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  createUser(user: any) {
    // this.http.post('/register',user).then();
    this.registerUser.register(user).subscribe((response) => {
      this.message = response;
      if(this.message.success == true){
        this.outputMsg = this.sanitizer.bypassSecurityTrustHtml('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Registration Successful</strong> Now you can <a routerLink="/login">Login</a> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
      }
      else{
        this.outputMsg = this.sanitizer.bypassSecurityTrustHtml('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Whoops!</strong> Looks like something went Wrong, please retry in sometime <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
      }
    });
  }
}
