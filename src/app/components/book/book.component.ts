import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: any;

  constructor(private cartservice: CartService) { }

  addToCart() {
    this.cartservice.addItem(this.book)
  }

  ngOnInit(): void {

  }

}
