import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductComponent} from "./product/product.component";
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {ProductsComponent} from "./products/products.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
