import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = [];

  constructor() { }

  addItem(book: any) {
    this.cart.push(book);
  }

  getItems(): any {
    return this.cart;
  }

  removeItem(book: any) {
    this.cart = this.cart.filter((item: any) => item.name !== book.name);
  }
}
