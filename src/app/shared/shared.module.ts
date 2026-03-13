import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ClipTextPipe} from "./pipes/clip-text.pipe";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ProductCardComponent,
    ClipTextPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    ClipTextPipe
  ]
})
export class SharedModule { }
