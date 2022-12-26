import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Product } from 'src/app/core/interfaces';
import { CategoryService, ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit {

  products: Product[] =[]
  categoryId?: number


  categories$: Observable<Category[]> = this.categoryService.getAll()

 
  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params ['category']
    })
    this.getProducts()
    

  }

  getProducts(){
    const params = {
      categoryId: this.categoryId 
    }
    this.productService.getProducts(params)
    .pipe()
    .subscribe(  res => {
      this.products = res
    })
  }

}
