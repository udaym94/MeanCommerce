import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails: Object = [];
  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService.getDashboard().subscribe((response) => {
      this.userDetails = response.user;
      console.log(this.userDetails);
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

  updateSettings(user) {
    this.authService.updateUserSettings(user).subscribe( response => this.userDetails = response);
  }

}
