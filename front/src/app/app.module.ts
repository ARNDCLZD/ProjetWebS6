import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBarcode6Module} from 'ngx-barcode6';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { InfocardComponent } from './components/infocard/infocard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPageComponent } from './components/add-page/add-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    InfocardComponent,
    LoginComponent,
    PageNotFoundComponent,
    ItemListComponent,
    AddPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgxBarcode6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
