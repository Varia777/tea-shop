import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogueComponent} from "./components/pages/catalogue/catalogue.component";
import {ProductsComponent} from "./components/pages/products/products.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductComponent} from "./components/pages/product/product.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
