import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from 'src/app/coffee-drinks/components/ingredients/ingredients.component';



@NgModule({
  declarations: [IngredientsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IngredientsComponent
  ]
})
export class CoffeeDrinksModule { }
