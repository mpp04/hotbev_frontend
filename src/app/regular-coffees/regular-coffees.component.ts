import { Component, OnInit } from '@angular/core';
import { CoffeeServiceService } from '../services/coffee-service.service';
import { CoffeeModel } from 'src/app/models/coffee-model.model';


@Component({
  selector: 'app-regular-coffees',
  templateUrl: './regular-coffees.component.html',
  styleUrls: ['./regular-coffees.component.css']
})
export class RegularCoffeesComponent implements OnInit {
 

coffees:any= [];


  constructor(private coffeeService: CoffeeServiceService) {
  
   }

  ngOnInit()    { 
   this.getCoffees();
  //  this.addCoffees();
  }


  getCoffees() {
    return this.coffeeService.getCoffees().subscribe((res: {}) =>
    { console.log('getting all regular coffes');
      this.coffees = res;     })
  }


  addCoffees() {
    return this.coffeeService.addCoffees('Cassandra Coffee', 'You drink this only once!')
    .subscribe((res => 
    {
      console.log(res);
    } ));
  }

}
