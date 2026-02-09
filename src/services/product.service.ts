import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  products: Product[] = [
    {
      id: 1,
      name: 'Mango',
      price: 1500,
      category: 'Food'
    },
    {
      id: 2,
      name: 'iPhone',
      price: 80000,
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Notebook',
      price: 50000,
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Sandals',
      price: 2000,
      category: 'Fashion'
    },
    {
      id: 5,
      name: 'Table',
      price: 1000,
      category: 'Furniture'
    }
  ];



  getProducts(): Product[] {
    return this.products;
  }


  addProduct(product: Product) {
    this.products.push(product);
  }


  deleteProduct(id: number) {
    this.products = this.products.filter(product=> product.id !== id);
  }

}
