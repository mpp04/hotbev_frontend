import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import { BrewingMethod } from "../models/brewing-method.model";

@Injectable({
  providedIn: 'root'
})
export class BrewingMethodService {



  headers = new HttpHeaders({'Content-Type': 'text/plain'});
 // headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

  URL = `${environment.CoffeeDrinksEndpoint}`;


  constructor(private httpClient: HttpClient) { }

  getCustomCoffeeDrinks(): Observable<BrewingMethod> {
    console.log(':: This is BrewingMethodService ::' +this.URL)
    return this.httpClient.get<BrewingMethod>(this.URL + '/getAllCoffeeBrewingMethods', {'headers':this.headers});

    //return this.httpClient.get(this.CoffeesEndpoint);

  }



}
