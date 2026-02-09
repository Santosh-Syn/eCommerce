import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  cartItems$ = new BehaviorSubject<Product[]>([]);

  constructor() {
  }

  addToCart(product: Product) {
    let ind = this.cartItems.findIndex(itm=> itm.id === product.id);

    if (ind !== -1) {
      this.cartItems[ind] = product;
    } else {
      this.cartItems.push(product);
    }
    
    this.cartItems$.next(this.cartItems);
  }


  removeFromCart(id: number) {
    // reset count in products list    
    this.cartItems.map(itm => {
      if (itm.id === id) {
        itm.count = 0;
      }
    }); 
    
    // Remove the item from cart 
    this.cartItems = this.cartItems.filter(product=> product.id !== id);
    this.cartItems$.next(this.cartItems);
  }


  getCart() {
    return this.cartItems;
  }

}
