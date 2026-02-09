import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  cartItems$ = new BehaviorSubject<Product[]>([]);

  constructor(private productService: ProductService) {
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
    this.cartItems = this.cartItems.filter(product=> product.id !== id);
    this.cartItems$.next(this.cartItems);

    // reset the product count
    this.productService.updateProductCount(id, 0);
  }


  getCart() {
    return this.cartItems;
  }

}
