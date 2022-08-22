import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }

  cart: [] = [];
  books: any = [
    {
      name: 'sellowship of the ring',
      img: 'https://m.media-amazon.com/images/I/51SZ+xIbZnL._SL320_.jpg',
      price: 270
    },
    {
      name: 'the unspoken name',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576631770l/45046552.jpg',
      price: 380
    },
    {
      name: 'the book thief',
      img: 'http://ecx.images-amazon.com/images/I/51eQvANUsnL.jpg',
      price: 460
    },
    {
      name: 'sellowship of the ring',
      img: 'https://m.media-amazon.com/images/I/51SZ+xIbZnL._SL320_.jpg',
      price: 270
    },
    {
      name: 'the unspoken name',
      img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576631770l/45046552.jpg',
      price: 380
    },
    {
      name: 'the book thief',
      img: 'http://ecx.images-amazon.com/images/I/51eQvANUsnL.jpg',
      price: 270
    }
  ]

  addToCarts(book: any) {
    console.log(book);

  }

  ngOnInit(): void {
  }



}
