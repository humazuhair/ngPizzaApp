import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../Pizza";
import {ActivatedRoute} from "@angular/router";
import {LIST_PIZZAS} from "../../shared/list.pizza";

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  pizzaToDisplay : Pizza | undefined;
  listOfPizzas : Pizza[] | undefined;
  ngOnInit(): void {
    const retrieveIdFromUrl = +this.route.snapshot.params['id'];
    this.listOfPizzas = LIST_PIZZAS;
    this.listOfPizzas.forEach(pizza=> {
      if (pizza.id == retrieveIdFromUrl){
        this.pizzaToDisplay = pizza;
      }
    })
    console.log(this.pizzaToDisplay?.name)
  }

}
