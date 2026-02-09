import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  products: Product[] = [
    {
      id: 1,
      name: 'Mango',
      price: 1500,
      category: 'Food',
      count: 0,
      imageUrl: '/images/mango.jpg'
    },
    {
      id: 2,
      name: 'iPhone',
      price: 80000,
      category: 'Electronics',
      count: 0,
      imageUrl: '/images/iphone.jpg'
    },
    {
      id: 3,
      name: 'Notebook',
      price: 50000,
      category: 'Electronics',
      count: 0,
      imageUrl: '/images/laptop.jpg'
    },
    {
      id: 4,
      name: 'Glasses',
      price: 2000,
      category: 'Fashion',
      count: 0,
      imageUrl: '/images/glasses.jpg'
    },
    {
      id: 5,
      name: 'Table',
      price: 1000,
      category: 'Furniture',
      count: 0,
      imageUrl: '/images/table.jpg'
    },
    {
      id: 5,
      name: 'Chair',
      price: 1100,
      category: 'Furniture',
      count: 0,
      imageUrl: '/images/chair.jpg'
    }
  ];

  products$ = new BehaviorSubject<Product[]>(this.products);

  constructor(private cartService: CartService) {
   
    // Keep product counts in sync with cart contents.
    this.cartService.cartItems$.subscribe((cartItems) => {     
      
      cartItems.forEach(cartItm => {
        const idx = this.products.findIndex(product => product.id === cartItm.id);
        if (idx !== -1) {
          this.products[idx].count = cartItm.count;
        }
      });
      this.products$.next(this.products);
    });
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.products$.next(this.products);
  }


  deleteProduct(id: number) {
    this.products = this.products.filter(product=> product.id !== id);
    this.products$.next(this.products);

    // also remove the product from cart if it exists
    this.cartService.removeFromCart(id);
  }


  updateProductCount(id: number, count: number) {
    let ind = this.products.findIndex(itm=> itm.id === id);
    if(ind !== -1) {
      this.products[ind].count = count;
      this.products$.next(this.products);
    }
  }

}
