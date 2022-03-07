import { Injectable } from '@angular/core';
import { Fruit, FruitType } from './classes/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitDataService {

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
  ];

  images: {name:string, url:string}[] = [
    {name: "Apple", url: "assets/img/Apple.svg"},
    {name: "Avocado", url: "assets/img/Avocado.svg"},
    {name: "Banana", url: "assets/img/Banana.svg"},
    {name: "Broccoli", url: "assets/img/Broccoli.svg"},
    {name: "Cactus", url: "assets/img/Cactus.svg"},
    {name: "Citrus", url: "assets/img/Citrus.svg"},
    {name: "Grapes", url: "assets/img/Grapes.svg"},
    {name: "Hazelnut", url: "assets/img/Hazelnut.svg"},
    {name: "Melon", url: "assets/img/Melon.svg"},
    {name: "Nut", url: "assets/img/Nut.svg"},
    {name: "Pear", url: "assets/img/Pear.svg"},
    {name: "Plum", url: "assets/img/Plum.svg"},
    {name: "Pomegranate", url: "assets/img/Pomegranate.svg"},
    {name: "Raspberry", url: "assets/img/Raspberry.svg"},
    {name: "Tomato", url: "assets/img/Tomato.svg"},
    {name: "Watermelon", url: "assets/img/Watermelon.svg"}
  ]
  constructor() { }
}
