import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result;
  outputMsg: any;
  constructor(private loginService: LoginService, private http: Http, private sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
  }
  authUser(data: any){
    this.loginService.authenticateUser(data).subscribe( (response) => 
    {
      this.result = response.json();
      if(this.result.success == true){
        this.outputMsg = this.sanitizer.bypassSecurityTrustHtml('<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Login Successful</strong> Taking You to Dashboard <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        this.router.navigate(['/dashboard'], { queryParams: { auth_token: this.result.token } });
      }
      else if(this.result.success == false){
        this.outputMsg = this.sanitizer.bypassSecurityTrustHtml('<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Whoops!</strong> ' + this.result.msg + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
      }
    });
  }
}
