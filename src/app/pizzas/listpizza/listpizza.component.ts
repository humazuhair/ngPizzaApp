import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../Pizza";
import {LIST_PIZZAS} from "../../shared/list.pizza";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listpizza',
  templateUrl: './listpizza.component.html',
  styleUrls: ['./listpizza.component.scss']
})
export class ListpizzaComponent implements OnInit {

  constructor(private router : Router) {

  }

  PIZZAS: Pizza[] | undefined;

  ngOnInit(): void {
    this.PIZZAS = LIST_PIZZAS;
  }
  selectPizza(selectedPizza: Pizza): void {
    const link = ['pizza', selectedPizza.id]
    this.router.navigate(link).then(r => console.log(r))
  }

}
