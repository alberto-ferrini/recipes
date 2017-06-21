import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://udemy-ng4-recipes.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://udemy-ng4-recipes.firebaseio.com/recipes.json').map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe.ingredients = [];
                    }
                }
                return recipes;
            }).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}
