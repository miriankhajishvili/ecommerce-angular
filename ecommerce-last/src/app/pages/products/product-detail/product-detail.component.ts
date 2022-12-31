import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces';
import { CartService, ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId!: string
  product!: Product
  quantity!: 1
  message?: string = ""
  similarProducts : Product[] = []

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ){}


  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.productId = params['id']
      this.getProduct()
    })
    
    
  }



  getProduct(){
    this.productService.getOne(this.productId)
    .pipe()
    .subscribe( product => {
      this.product = product
      this.getProducts()
    })
  }





  addToCart(){
    this.cartService.addToCart({
      productId: this.productId,
      quantity: this.quantity
    })

    .pipe()
    .subscribe(() => {
      this.message = 'Added to cart'
      setTimeout(()=> {
        this.message = undefined
      }, 2000)
    })
  }


  getProducts(){
    this.productService.getProducts({
      limit: 5,
      categoryId: this.product.category.id,
      similar: this.product.id
    })
    .pipe()
    .subscribe((products) => {
      this.similarProducts = products
    })
    
  }


}
