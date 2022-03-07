import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FruitType } from '../classes/fruit';
import { FruitDataService } from '../fruit-data-service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  fruitTypes = Object.keys(FruitType).filter(f => isNaN(Number(f)));

  form: FormGroup = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    photo: new FormControl('')
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder, public data:FruitDataService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      name:  ['', Validators.required],
      price:  ['', Validators.required],
      photo:  ['', Validators.required]
    });
  }

  get f(): {[key: string]: AbstractControl} { // Getter per poder fer f.name en comptes de form.controls.username
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    let currentFruit = this.form.value;
    currentFruit.type = FruitType[currentFruit.type];
    currentFruit.photo = currentFruit.photo + ".svg";
    console.log(currentFruit);
    this.data.fruits.push(currentFruit);
    this.onReset();
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
  }

}
