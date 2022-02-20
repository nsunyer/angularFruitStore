import { Component } from '@angular/core';
import { Fruit, FruitType } from './classes/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: Fruit[] = [
    {type: FruitType.fruit, name: "Apple", price: 3.5, photo:"Apple.svg"}, 
    {type: FruitType.vegetable, name: "Broccoli", price: 6.5, photo:"Broccoli.svg"},
    {type: FruitType.unknown, name: "Tomato", price: 2.5, photo:"Tomato.svg"}, 
    {type: FruitType.fruit, name: "Avocado", price: 3.5, photo:"Avocado.svg"}, 
    {type: FruitType.fruit, name: "Banana", price: 3.5, photo:"Banana.svg"}, 
    {type: FruitType.fruit, name: "Citrus", price: 3.5, photo:"Citrus.svg"}, 
    {type: FruitType.fruit, name: "Grapes", price: 3.5, photo:"Grapes.svg"}, 
    {type: FruitType.fruit, name: "Melon", price: 3.5, photo:"Melon.svg"}, 
    {type: FruitType.fruit, name: "Pear", price: 3.5, photo:"Pear.svg"}
  ] 
}
