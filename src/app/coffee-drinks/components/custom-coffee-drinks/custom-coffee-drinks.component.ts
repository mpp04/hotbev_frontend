import { Component, OnInit } from '@angular/core';
import { CustomCoffeeDrinksService } from "../../services/custom-coffee-drinks.service";


@Component({
  selector: 'app-custom-coffee-drinks',
  templateUrl: './custom-coffee-drinks.component.html',
  styleUrls: ['./custom-coffee-drinks.component.css']
})
export class CustomCoffeeDrinksComponent implements OnInit {

  coffees:any=[];
  modalStatus:string=" ";

  selectEvent:string="";
  brewingMethods:any=[];
  varieties:any=[]
  filters:any=[];
  ingredients:any=[];
  eventFlag:string="";
  eventValueToRetain:string="";
  coffeeFilter:string="";
  coffeeBrewingMethod:string="";
  coffeeIngredients:string="";
  coffeeVariety:string="";
  coffeeDrinkName:string="";
  coffeeDrinkDescription:string="";


  modalOn() { this.modalStatus="is-active" }
  modalOff() { this.modalStatus=""}

  constructor(private customCoffeeDrinksService: CustomCoffeeDrinksService) {}


  ngOnInit(): void {
    this.getCustomCoffeeDrinks();
    this.getBrewingMethods();
    this.getCoffeeFilters();
    this.getCoffeeVarieties();
    this.getCoffeeIngredients();
  }

  getCustomCoffeeDrinks() {
    return this.customCoffeeDrinksService.getCustomCoffeeDrinks().subscribe((res:{}) =>
    { console.log('getting all custom coffees');
    this.coffees = res; })
  }

  experimental($event:any) {
    console.log($event.target.value, $event.containsElement())
  };

  alertSelect($event:any, eventFlag:string) {
    this.selectEvent = $event.target.value;
    this.eventFlag = eventFlag;
    switch (eventFlag) {
      case 'brewing': this.coffeeBrewingMethod=this.selectEvent; break;
      case 'filter': this.coffeeFilter=this.selectEvent; break;
      case 'varieties': this.coffeeVariety=this.selectEvent; break;
      case 'ingredients': this.coffeeIngredients=this.selectEvent;break;
    }
  }

getBrewingMethods() {
    return this.customCoffeeDrinksService.getBrewingMethod().subscribe((result:{}) =>
  {console.log('[::] getBrewingMethods::CustomCoffeeDrinksComponent :: getting all brewing methods');
    console.log(result);
  this.brewingMethods = result;

  })
}

getCoffeeVarieties() {
    return this.customCoffeeDrinksService.getCoffeeVarieties().subscribe( (result:{}) =>
    {
      console.log('[::] getCoffeeVarieties::CustomCoffeeDrinksComponent [::]');
      this.varieties = result;
      console.log(result);
      console.log("[::] getCoffeeVarieties : done [::]")
    })

}

getCoffeeFilters() {

    return this.customCoffeeDrinksService.getCoffeeFilters().subscribe((result:{}) =>
    {
      console.log('[::] getCoffeeFilters::CustomCoffeeDrinksComponent [::]');
      this.filters = result;
      console.log(result);
      console.log("[::] getCoffeeFilters : done [::]")

    })
}


getCoffeeIngredients() {
    return this.customCoffeeDrinksService.getCoffeeIngredients().subscribe((result:{}) =>
    {
      console.log('[::] getCoffeeIngredients::CustomCoffeeDrinksComponent [::]');
      this.ingredients = result;
      console.log(result);
      console.log("[::] getCoffeeIngredients : done [::]")
    })

  }

addCustomCoffeeDrink() {
    return this.customCoffeeDrinksService.addCustomCoffees(this.coffeeVariety, this.coffeeIngredients,
      this.coffeeFilter, this.coffeeBrewingMethod, this.coffeeDrinkName, this.coffeeDrinkDescription)
      .subscribe((res => {

        console.log(res);
      }))
}

}
