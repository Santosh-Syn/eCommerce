import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem, Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class Cart implements OnInit{
  cartItems: CartItem[]=[];
  
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
