import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../Pizza";
import {Router} from "@angular/router";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-listpizza',
  templateUrl: './listpizza.component.html',
  styleUrls: ['./listpizza.component.scss']
})
export class ListpizzaComponent implements OnInit {

  constructor(private router : Router, private pizzasService: PizzasService) {

  }

  PIZZAS: Pizza[] | undefined;

  ngOnInit(): void {
    this.PIZZAS = this.pizzasService.getListPizzas();
  }
  selectPizza(selectedPizza: Pizza): void {
    const link = ['pizza', selectedPizza.id]
    this.router.navigate(link).then(r => console.log(r))
  }

}
