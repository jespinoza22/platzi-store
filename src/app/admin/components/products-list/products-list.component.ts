import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  } 

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(deleted => {
      if (deleted){
        console.log(`?Product ${id} deleted`)
        this.products = this.products.filter(product => product.id !== id)
      }else {
        console.error('Unable to delete the product');
      }
    });
  }
}
