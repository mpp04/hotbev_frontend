import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CustomCoffeeDrinks } from 'src/app/coffee-drinks/models/custom-coffee-drinks.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomCoffeeDrinksService {



  //headers = new HttpHeaders({'Content-Type': 'application/json'});
  headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

  URL = `${environment.CoffeeDrinksEndpoint}`;


  constructor(private httpClient: HttpClient) { }



  getCustomCoffeeDrinks(): Observable<CustomCoffeeDrinks> {
    console.log('This is:' +this.URL)
    return this.httpClient.get<CustomCoffeeDrinks>(this.URL + '/getAllCoffeeDrinks', {'headers':this.headers});

    //return this.httpClient.get(this.CoffeesEndpoint);

  }





}
