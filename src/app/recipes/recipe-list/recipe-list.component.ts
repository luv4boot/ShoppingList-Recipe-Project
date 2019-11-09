import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a Test',
      'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg'),
    new Recipe('A Test Recipe', 'This is a simply a Test',
      'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
