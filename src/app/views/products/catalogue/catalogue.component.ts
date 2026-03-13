import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public products: ProductType[] = [];

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
    console.log('Конструктор Catalogue');
  }

  ngOnInit(): void {
    console.log('ngOnInit Catalogue');



    this.productService.getProducts()
      .subscribe(
      {
        next: (data) => {
          console.log('catalogue' + data);
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
      })
  }
}
