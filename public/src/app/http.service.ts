import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";


@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

    logout(){
        return this._http.get("/logout").map(data => data.json()).toPromise();
    }
    destroySession(){
        return this._http.get("/destroySession").map(data => data.json()).toPromise();
    }
    setSession(userName){
        console.log("Add user to session method in http service firing");
        return this._http.post("/setSession", {userName: userName} ).map(data => data.json()).toPromise();
    }
    checkSession(){
        console.log("Check session method in http service firing");
        return this._http.get("/checkSession" ).map(data => data.json()).toPromise();
    }

    // addItem(item){
    //     console.log("Add item method in http service firing...");
    //     return this._http.post('/addItem', item).map(data => data.json()).toPromise();
    // }
    //
    // getAllItems(){
    //   console.log("Getting all Items http service firing...");
    //   return this._http.get('/getAllItems').map(data => data.json()).toPromise();
    // }

}
