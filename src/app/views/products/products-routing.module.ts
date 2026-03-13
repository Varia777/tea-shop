import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
