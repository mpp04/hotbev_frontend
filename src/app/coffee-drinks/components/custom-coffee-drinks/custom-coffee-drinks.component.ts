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

modalOn() { this.modalStatus="is-active" }
modalOff() { this.modalStatus=""}

  constructor(private customCoffeeDrinksService: CustomCoffeeDrinksService) {}


  ngOnInit(): void {
    this.getCustomCoffeeDrinks();
  }

  getCustomCoffeeDrinks() {
    return this.customCoffeeDrinksService.getCustomCoffeeDrinks().subscribe((res:{}) =>
    { console.log('getting all custom coffees');
    this.coffees = res; })
  }




}
