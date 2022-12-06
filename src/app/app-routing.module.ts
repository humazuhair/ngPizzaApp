import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListpizzaComponent} from "./pizzas/listpizza/listpizza.component";
import {DetailsPizzaComponent} from "./pizzas/details-pizza/details-pizza.component";

const routes: Routes = [
  {path: 'pizza', component: ListpizzaComponent},
  {path: 'pizza/:id', component: DetailsPizzaComponent},
  {path: '', redirectTo: 'pizza', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
