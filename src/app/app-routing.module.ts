import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFruitComponent } from './add-fruit/add-fruit.component';
import { ContactComponent } from './contact/contact.component';
import { FruitGridComponent } from './fruit-grid/fruit-grid.component';

const routes: Routes = [
  {path: 'home', component: FruitGridComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add', component: AddFruitComponent},
  {path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
