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

  getItem() {
    return this.cart;
  }
}
