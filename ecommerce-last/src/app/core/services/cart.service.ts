import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService {

  cartCount = new BehaviorSubject(0)
  cartCount$ = this.cartCount.asObservable()

  getCarts(){
    return this.get('cart')
    .pipe(
      tap((carts:any) => {
        this.cartCount.next(carts.reduce((acc: number, item: Cart)=> acc =item.quantity, 0))
      })
    )
  }

  addToCart( payload: {
    productId: string,
    quantity: number
  }){

    return this.post('cart', payload)
    .pipe(
      tap(() => {
        this.cartCount.next(this.cartCount.value + payload.quantity)
      })
    )

  }
deleteItem( id: number) : Observable<any> {
  return this.delete(`cart/${id}`)

}

}
