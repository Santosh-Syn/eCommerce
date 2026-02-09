import { Injectable } from '@angular/core';
import { CartItem, Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  cartItems$ = new BehaviorSubject<CartItem[]>([]);

  addToCart(product: Product) {
    let ind = this.cartItems.findIndex(itm=> itm.id === product.id);
    let currCount = 0;

    if(ind !== -1) {
      currCount = this.cartItems[ind].count;
      this.cartItems.splice(ind,1, {...product, count: ++currCount });
    } else {
      this.cartItems.push({...product, count: ++currCount });
    }

    
    this.cartItems$.next(this.cartItems);
  }


  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(product=> product.id !== id);
    this.cartItems$.next(this.cartItems);
  }


  getCart() {
    return this.cartItems;
  }

}
