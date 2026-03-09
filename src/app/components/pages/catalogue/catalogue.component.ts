import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public products: ProductType[] = [];

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

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
