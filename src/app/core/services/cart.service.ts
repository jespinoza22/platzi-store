import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product){
    const index = this.products.findIndex( x => x.id === product.id);
    if (index > -1){
      this.products[index].quantity += 1 ;
      this.products = [...this.products];
    }else{
      product.quantity = 1;
      this.products = [...this.products, product];
    }
    console.log(this.products);
    this.cart.next(this.products);
  }

  addOneToCart(id: string){
    const index = this.products.findIndex( x => x.id === id);
    this.products[index].quantity += 1 ;
    this.products = [...this.products];
  }
}
