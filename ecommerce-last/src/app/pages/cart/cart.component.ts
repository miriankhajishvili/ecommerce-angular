import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/interfaces/cart';
import { CartService } from 'src/app/core/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  implements OnInit{

  cartItems: Cart[] = []
  cartSum = 0

  constructor(
    private cartService: CartService
  ){}


  ngOnInit(): void {

    this.getCarts()
    
  }


  getCarts(){
    this.cartService.getCarts()
    .pipe()
    .subscribe( res =>{
      this.cartItems = res
      this.cartSum = this.cartItems.reduce((acc, item) => acc +item.total, 0)
  
    }) 
  }
 
}
