import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  carts: any = [];

  constructor( private cartservice: CartService ) {
  }

  ngOnInit(): void {
  }

  getCart() {
    return this.cartservice.getItems();
  }
}
