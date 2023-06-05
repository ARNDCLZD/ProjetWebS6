import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AddPageComponent } from './components/add-page/add-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'liste', component: ItemListComponent},
  { path: 'add', component: AddPageComponent},
  { path: '', component: AccueilComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
