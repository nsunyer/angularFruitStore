import { Component, Input, OnInit } from '@angular/core';
import { Fruit, FruitType } from '../classes/fruit';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  @Input() fruit: Fruit = {type: FruitType.unknown, name: "", price: -1, photo: ""};
  constructor() { }

  ngOnInit(): void {
  }

}
