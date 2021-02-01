import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/components/home/home.component";
import { ContactComponent } from './components/contact/contact.component';
import { RegularCoffeesComponent } from './regular-coffees/regular-coffees.component';
import {CustomCoffeeDrinksComponent} from "./coffee-drinks/components/custom-coffee-drinks/custom-coffee-drinks.component";

const routes: Routes = [
{
path:'',
component: HomeComponent,
},
{
path:'Home',
component: HomeComponent,
},
{
path:"contact",
component: ContactComponent,
},

{
  path:"RegularCoffees",
  component: RegularCoffeesComponent,
},
  {
    path:"CustomCoffeeDrinks",
    component: CustomCoffeeDrinksComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
