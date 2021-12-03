import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CardsListComponent } from './cards-list/cards-list.component';

const routes: Routes = [
  {path: '', component: CardsListComponent},
  {path: 'details/:id', component: CardsDetailsComponent},
  {path: 'new', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
