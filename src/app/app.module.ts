import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaFormComponent } from './pizzas/pizza-form/pizza-form.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {PizzasModule} from "./pizzas/pizzas.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PizzasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
