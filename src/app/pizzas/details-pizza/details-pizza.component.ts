import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../Pizza";
import {ActivatedRoute, Router} from "@angular/router";
import {LIST_PIZZAS} from "../../shared/list.pizza";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pizzaService: PizzasService, private router : Router) { }
  pizzaToDisplay : Pizza | undefined;
  listOfPizzas : Pizza[] | undefined;
  ngOnInit(): void {
    const retrieveIdFromUrl = +this.route.snapshot.params['id'];
    //this.listOfPizzas = LIST_PIZZAS;
    this.listOfPizzas = this.pizzaService.getListPizzas();
    this.pizzaToDisplay = this.pizzaService.getSinglePizza(retrieveIdFromUrl);
    // this.listOfPizzas.forEach(pizza=> {
    //   if (pizza.id == retrieveIdFromUrl){
    //     this.pizzaToDisplay = pizza;
    //   }
    // })
    console.log('Pizza selectionné: ' , this.pizzaToDisplay)
  }

  goBack(): void{
    //Router: permet la navogation entre les components
    //ActivateRoute: permet de recuperer les parametres depuis l'url
    //Route: permet de definir les routes
    this.router.navigate(['/pizza'])
  }

  editPizza(pizzaToEdit: Pizza): void{
    const lien = ['pizza/edit', pizzaToEdit.id];
    this.router.navigate(lien);
  }
}
