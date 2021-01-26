import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CoffeeServiceService } from './services/coffee-service.service';
import { RegularCoffeesComponent } from './regular-coffees/regular-coffees.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeDrinksModule } from './coffee-drinks/coffee-drinks.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    RegularCoffeesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CoffeeDrinksModule
    ],
  providers: [
    CoffeeServiceService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
