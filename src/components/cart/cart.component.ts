import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class Cart implements OnInit{
  cartItems: Product[]=[];

  // todo: calculate total from cart items instead of hardcoding
  cartTotal = 100;
  
  constructor(private cartService: CartService) {
  }

  
  ngOnInit(): void {

    this.cartService.cartItems$.subscribe({
      next: (items)=> {
        this.cartItems = items;
      },
      error: (err=> {
        console.log(err);
      })
    });
  }


  onRemoveItemClick(id: number) {
    this.cartService.removeFromCart(id);
  }

}
