import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import * as FileSaver from 'file-saver';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.product$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.productsService.getProduct(params.id);
        })
      );
  }

  // fethcProduct(id: string) {
  //   this.productsService.getProduct(id).subscribe((product) => {
  //     this.product = product;
  //   });
  // }

  createProduct() {
    const newProduct: Product = {
      id: '123',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto',
      quantity: 0, //jnr
    };
    this.productsService.createProduct(newProduct).subscribe((product) => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 1515,
      description: 'edicion titulo 1',
    };
    this.productsService
      .updateProduct('123', updateProduct)
      .subscribe((product) => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('123').subscribe((rpta) => {
      console.log(rpta);
    });
  }

  getRandomUsers(){
    this.productsService.getRandomUser()
    .subscribe(
      users => {
        console.log(users);
      },
      error => {
        console.log(error);
      }
    );
  }

  getFile(){
    this.productsService.getFile()
    .subscribe(content => {
      console.log(content);
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      FileSaver.saveAs(blob, 'hello world.txt');
    });
  }
}
