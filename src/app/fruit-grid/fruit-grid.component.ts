import { Component, OnInit, Input } from '@angular/core';
import { FruitDataService } from '../fruit-data-service';

@Component({
  selector: 'app-fruit-grid',
  templateUrl: './fruit-grid.component.html',
  styleUrls: ['./fruit-grid.component.css']
})
export class FruitGridComponent implements OnInit {

  constructor(public data: FruitDataService) { }

  ngOnInit(): void {
  }

}
