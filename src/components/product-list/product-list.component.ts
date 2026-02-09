import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductList implements OnInit {

  products: Product[] = [];

  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public authService: AuthService
  ) { }


  ngOnInit(): void {
    this.productService.products$.subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err)=> {
        console.log(err);
      }
    });
  }


  addToCart(product: Product) {
    product.count = product.count + 1;  

    this.cartService.addToCart(product);

  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

}
