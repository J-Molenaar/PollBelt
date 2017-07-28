import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    currentUser;

  constructor(private _httpService: HttpService, private router: Router) {
      this._httpService.checkSession().then(result=>{
      this.currentUser = result.userName
      })
   }

  ngOnInit() {

  }

  login(userName){
      console.log(`Inside login in landing component ${userName}`)
      this._httpService.setSession(userName);
      this.currentUser = userName;
      this.router.navigate(["/dashboard"]);
  }

  destroySession() {
      this._httpService.destroySession()
        .then((data) => {console.log("Session destroyed.")})
        .catch((err) => {console.log("Error on session destroy" + err)})
    }

}
