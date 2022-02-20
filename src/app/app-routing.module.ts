import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FruitGridComponent } from './fruit-grid/fruit-grid.component';

const routes: Routes = [
  {path: 'home', component: FruitGridComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
