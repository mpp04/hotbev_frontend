import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CustomCoffeeDrinks } from 'src/app/coffee-drinks/models/custom-coffee-drinks.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { BrewingMethod } from "src/app/coffee-drinks/models/brewing-method.model";
import { Variety } from "src/app/coffee-drinks/models/variety.model";
import { Filter } from "src/app/coffee-drinks/models/filter.model";
import { Ingredients } from "src/app/coffee-drinks/models/ingredients.model";

@Injectable({
  providedIn: 'root'
})
export class CustomCoffeeDrinksService {



  //headers = new HttpHeaders({'Content-Type': 'application/json'});
  headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
  plainHeaders = new HttpHeaders({'Content-TYpe': 'text/plain'})

  URL = `${environment.CoffeeDrinksEndpoint}`;
  CoffeeDrinksURL = `${environment.CoffeeDrinksEndpoint}`
  headersXForm = new HttpHeaders (
    {
      'Content-Type':'application/x-www-form-urlencoded'
    });

  constructor(private httpClient: HttpClient) { }

  getCustomCoffeeDrinks(): Observable<CustomCoffeeDrinks> {
    console.log('This is:' +this.URL)
    return this.httpClient.get<CustomCoffeeDrinks>(this.URL + '/getAllCoffeeDrinks', {'headers':this.headers});

    //return this.httpClient.get(this.CoffeesEndpoint);

  }

  getBrewingMethod(): Observable<BrewingMethod> {
    console.log("[::] getBrewingMethod::CustomCoffeeDrinksService: getting [ BREWING METHODS ]...")
    return this.httpClient.get<BrewingMethod>(this.URL + '/getAllCoffeeBrewingMethods',
      {'headers': this.plainHeaders});
  }

 getCoffeeVarieties(): Observable<Variety> {
    console.log("[::] getCoffeeVarieties::CustomCoffeeDrinksService: getting coffee [ VARIETIES ]...")
   return this.httpClient.get<Variety>( this.URL + '/getAllCoffeeVarieties',{'headers': this.plainHeaders});
 }

 getCoffeeIngredients(): Observable<Ingredients> {
    console.log("[::] getCoffeeIngredients::CustomCoffeeDrinksService: getting coffee [ INGREDIENTS ]...")
    return this.httpClient.get<Ingredients>( this.URL +'/getAllCoffeeIngredients', {'headers': this.plainHeaders});
 }

getCoffeeFilters(): Observable<Filter> {
  console.log("[::] getCoffeeFilters::CustomCoffeeDrinksService: getting coffee [ FILTERS ]...")
  return this.httpClient.get<Filter>( this.URL +'/getAllCoffeeFilters', {'headers': this.plainHeaders});
}

  addCustomCoffees(coffeeVariety:string,
                   coffeeIngredients:string,
                   coffeeFilter:string,
                   coffeeBrewingMethod:string,
                   coffeeDrinkName:string,
                   coffeeDrinkDescription:string) {
    return this.httpClient.post<any>( this.CoffeeDrinksURL
      +'/makeCoffeeDrink?coffeeVariety='
      +coffeeVariety
      +'&coffeeIngredients='+coffeeIngredients
      +'&coffeeFilter='+coffeeFilter
      +'&coffeeBrewingMethod='+coffeeBrewingMethod
      +'&coffeeDrinkName='+coffeeDrinkName
      +'&coffeeDrinkDescription='+coffeeDrinkDescription, null,{'headers':this.headersXForm}) }






}
