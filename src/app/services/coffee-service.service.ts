import { Injectable } from '@angular/core';
import { CoffeeModel } from "src/app/models/coffee-model.model";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class CoffeeServiceService {


    headers= new HttpHeaders ({
      'Content-Type': 'application/json'
    });

    headersXForm = new HttpHeaders (
      {
      'Content-Type':'application/x-www-form-urlencoded'
    });


  CoffeesURL = `${environment.CoffeesEndpoint}`;


  constructor(private httpClient: HttpClient) { }



    getCoffees(): Observable<CoffeeModel> {
      console.log('This is:' +this.CoffeesURL)
      return this.httpClient.get<CoffeeModel>(this.CoffeesURL + '/getCoffees',
        {'headers':this.headers});

      //return this.httpClient.get(this.CoffeesEndpoint);

    }


addCoffees(name:string, description:string) {

  return this.httpClient.post<any>(this.CoffeesURL +
    '/create?name='+name+'&description='+description, null,
  {'headers': this.headersXForm})
}


}
