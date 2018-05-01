import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
// import { RegistrationService } from '../registration.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
// import { DomSanitizer } from '@angular/platform-browser';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message;
  outputMsg:any;
  constructor(
    private authService: AuthService,
    private http: Http,
    private router: Router,
    private flashMessage: FlashMessagesService) {}

  ngOnInit() {
  }

  createUser(user: any) {
    // this.http.post('/register',user).then();
    this.authService.register(user).subscribe((response) => {
      this.message = response;
      if(this.message.success == true){
        this.flashMessage.show('Registration Successfull', {cssClass:'alert alert-success col-md-6 offset-md-3', timeOut:3000});
        this.router.navigate(['login']);
        // this.outputMsg = this.sanitizer.bypassSecurityTrustHtml('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Registration Successful</strong> Now you can <a routerLink="/login">Login</a> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
      }
      else{
        this.flashMessage.show('Something went Wrong, please try later', {cssClass:'alert alert-danger col-md-6 offset-md-3', timeOut:3000});
        this.router.navigate(['register']);
        // this.outputMsg = this.sanitizer.bypassSecurityTrustHtml('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Whoops!</strong> Looks like something went Wrong, please retry in sometime <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
      }
    });
  }
}
