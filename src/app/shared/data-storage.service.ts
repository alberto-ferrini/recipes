import { Http } from '@angular/http'
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put('https://udemy-ng4-recipes.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
}
