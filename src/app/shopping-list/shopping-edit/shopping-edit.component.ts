import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../sopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngredient(ingredient);
  }

}
