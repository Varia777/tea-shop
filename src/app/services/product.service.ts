import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {OrderData} from "../types/order-data";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderData) {
    return this.http.post<{ success: boolean, message?: string }>('https://testologia.ru/order-tea', data);
  }
}
