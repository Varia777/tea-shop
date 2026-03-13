import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: ProductType[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('ProductsComponent товары:', data);
        this.products = data;
      },
      error: (error) => {
        console.error('Ошибка загрузки:', error);
      }
    });
  }

  public addToCart(): void {

  }

}
