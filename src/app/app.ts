import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../components/navbar/navbar";
import { Register } from "../components/register/register.component";
import { ProductList } from "../components/product-list/product-list.component";
import { Cart } from "../components/cart/cart.component";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Register, ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'e-Commerce Demo'

  constructor(public authService: AuthService) {}

  onClickRegisterUser() {
    this.authService.showUserForm$.next(true);
  }


  onClickLoginUser() {
    this.authService.showUserForm$.next(true);
  }

}
