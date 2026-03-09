import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MainComponent } from './components/pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogueComponent } from './components/pages/catalogue/catalogue.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {HttpClientModule} from "@angular/common/http";
import { ClipTextPipe } from './pipes/clip-text.pipe';
import { ProductComponent } from './components/pages/product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CatalogueComponent,
    ProductsComponent,
    OrderComponent,
    ProductCardComponent,
    ClipTextPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
