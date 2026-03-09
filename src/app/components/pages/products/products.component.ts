import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products: ProductType[] = [];

  ngOnInit(): void {
  }

  public addToCart(): void {

  }

}
