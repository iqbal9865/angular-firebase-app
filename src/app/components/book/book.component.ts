import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: any;
  isInCart: boolean = false;

  constructor(private cartservice: CartService) { }

  addToCart() {
    this.cartservice.addItem(this.book)
    this.isInCart = true;
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartservice.removeItem(this.book);
  }

  ngOnInit(): void {

  }
}
