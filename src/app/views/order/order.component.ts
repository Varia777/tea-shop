import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  orderSent: boolean = false;
  errorMessage: string = '';
  orderForm!: FormGroup;
  // public orderData: OrderData = {
  //   name: '',
  //   last_name: '',
  //   phone: '',
  //   country: '',
  //   zip: '',
  //   product: '',
  //   address: '',
  //   comment: '',
  // }

  private querySubscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      product: [{value: '', disabled: true}], // отключено, только для чтения
      name: ['', [Validators.required, Validators.pattern(/^[А-Яа-яA-Za-z]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[А-Яа-яA-Za-z]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{11}$/)]],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', [Validators.required, Validators.pattern(/^[А-Яа-яA-Za-z0-9\s\-\/]+$/)]],
      comment: ['']
    });


    this.querySubscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.orderForm.get('product')?.setValue(params['product']);
      }
    })
  }

  get name() { return this.orderForm.get('name'); }
  get lastName() { return this.orderForm.get('last_name'); }
  get phone() { return this.orderForm.get('phone'); }
  get country() { return this.orderForm.get('country'); }
  get zip() { return this.orderForm.get('zip'); }
  get address() { return this.orderForm.get('address'); }

  submitOrder(): void {
    this.errorMessage = '';

    if (this.orderForm.invalid) {
      this.errorMessage = 'Пожалуйста, заполните все поля правильно';
      return;
    }

    const formData = this.orderForm.getRawValue();

    this.subscriptionOrder = this.productService.createOrder(formData)
      .subscribe(response => {
        if (response.success && !response.message) {
          this.orderSent = true;
        } else {
          this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptionOrder?.unsubscribe();
    this.querySubscription?.unsubscribe();
  }

}
