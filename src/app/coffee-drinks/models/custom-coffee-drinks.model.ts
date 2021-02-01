export class CustomCoffeeDrinks {



public coffeeVariety: string;
public coffeeIngredients: string;
public coffeeFilter: string;
public coffeeBrewingMethod: string;
public coffeeDrinkName: string;
public coffeeDrinkDescription: string;
public SessionID: string;
public remoteAddress: string
public date: string;

constructor(coffeeVariety: string, coffeeIngredients: string, coffeeFilter: string, coffeeBrewingMethod: string, coffeeDrinkName: string,
            coffeeDrinkDescription: string, SessionID: string, remoteAddress: string, date: string) {
  this.coffeeVariety=coffeeVariety;
  this.coffeeIngredients=coffeeIngredients;
  this.coffeeFilter=coffeeFilter;
  this.coffeeBrewingMethod=coffeeBrewingMethod;
  this.coffeeDrinkName=coffeeDrinkName;
  this.coffeeDrinkDescription=coffeeDrinkDescription;
  this.SessionID=SessionID;
  this.remoteAddress=remoteAddress;
  this.date=date;
}

}
