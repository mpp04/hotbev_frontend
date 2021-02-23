import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from 'src/app/coffee-drinks/components/ingredients/ingredients.component';
import { CustomCoffeeDrinksComponent } from './components/custom-coffee-drinks/custom-coffee-drinks.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import {CustomCoffeeDrinksService} from "./services/custom-coffee-drinks.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    IngredientsComponent,
    CustomCoffeeDrinksComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CustomCoffeeDrinksService
  ],
  exports: [
    IngredientsComponent,
    CustomCoffeeDrinksComponent
  ]
})
export class CoffeeDrinksModule { }
