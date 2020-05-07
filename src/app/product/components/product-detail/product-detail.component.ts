import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fethcProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fethcProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct(){
    const newProduct: Product = {
      id: '123',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto',
      quantity: 0//jnr
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 1515,
      description: 'edicion titulo 1'
    };
    this.productsService.updateProduct('123', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('123')
    .subscribe(rpta => {
      console.log(rpta);
    });
  }
}
