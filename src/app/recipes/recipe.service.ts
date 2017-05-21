import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/sopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'A special pizza recipe',
            'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
            [
                new Ingredient("Flour pack",1),
                new Ingredient("Tomato sauce",1),
                new Ingredient("Mozzarella",1)
            ]
            ),
        new Recipe(
            'Cheeseburger',
            'The best hamburger ever',
            'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
            [
                new Ingredient("Bun",1),
                new Ingredient("Hamburger",1),
                new Ingredient("Cheese slice",1),
                new Ingredient("Tomato",1),
                new Ingredient("Salad",1)
            ]
            )
    ];

    constructor(private shoppingListService:ShoppingListService) {

    }

    public getRecipes(){
        return this.recipes.slice();
    }

    public addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}