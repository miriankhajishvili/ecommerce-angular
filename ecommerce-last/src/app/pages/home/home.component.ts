import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Product[] = []


  sub$ = new Subject()


  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){

    this.productsService.getProducts({})
    .pipe(takeUntil(this.sub$))
    .subscribe((products) => {
      this.products = products
    })
  }
  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
