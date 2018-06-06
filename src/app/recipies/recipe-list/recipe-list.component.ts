import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipies.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe ('Test Recipe', 'This is a test recipe', 'https://thumbs.dreamstime.com/z/pepperoni-pizza-thinly-sliced-popular-topping-american-style-pizzerias-30402134.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
