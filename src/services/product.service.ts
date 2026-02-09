import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

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
      count: 0
    },
    {
      id: 2,
      name: 'iPhone',
      price: 80000,
      category: 'Electronics',
      count: 0
    },
    {
      id: 3,
      name: 'Notebook',
      price: 50000,
      category: 'Electronics',
      count: 0
    },
    {
      id: 4,
      name: 'Sandals',
      price: 2000,
      category: 'Fashion',
      count: 0
    },
    {
      id: 5,
      name: 'Table',
      price: 1000,
      category: 'Furniture',
      count: 0
    }
  ];


  products$ = new BehaviorSubject<Product[]>(this.products);


  addProduct(product: Product) {
    this.products.push(product);
    this.products$.next(this.products);
  }


  deleteProduct(id: number) {
    this.products = this.products.filter(product=> product.id !== id);
    this.products$.next(this.products);
  }


  updateProductCount(id: number, count: number) {
    let ind = this.products.findIndex(itm=> itm.id === id);
    if(ind !== -1) {
      this.products[ind].count = count;
      this.products$.next(this.products);
    }
  }

}
