import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitGridComponent } from './fruit-grid/fruit-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AddFruitComponent } from './add-fruit/add-fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    FruitGridComponent,
    NavbarComponent,
    ContactComponent,
    AddFruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
