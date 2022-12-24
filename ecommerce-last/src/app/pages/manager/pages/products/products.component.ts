import { Component } from '@angular/core';
import { Category, Product } from 'src/app/core/interfaces';
import { CategoryService, ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = []

  constructor(
    private productService : ProductsService
  ){}

  ngOnInit(): void {
    this.getAll()
    
  }

  getAll(){
    this.productService.getProducts({})
    .pipe()
    .subscribe( res => {
      this.products = res
    })
  }

  deleteItem(id:string){
    this.productService.deleteItem(id)
    .pipe()
    .subscribe( res => {
      this.getAll()
    })
  }

}
