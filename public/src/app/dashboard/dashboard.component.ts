import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    currentUser;

  constructor(private _httpService: HttpService, private router: Router) {
      this._httpService.checkSession()
      .then(result => {this.currentUser = result.userName});
   }

  ngOnInit() {


  }

  logout(){
      this._httpService.logout()

    }

}
