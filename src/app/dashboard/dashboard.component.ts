import { Component, OnInit } from '@angular/core';
import { FormControl,Form,FormsModule } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails;
  constructor(private userDashboard : DashboardService) { }

  ngOnInit() {
    this.userDashboard.getUserDetails().subscribe((response) => {
      this.userDetails = response;
      console.log(this.userDetails);
    });
  }

}
