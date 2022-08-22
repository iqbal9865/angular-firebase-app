import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks () {
    return [
      {
        name: 'sellowship of the ring',
        img: 'https://m.media-amazon.com/images/I/51SZ+xIbZnL._SL320_.jpg',
        price: 270
      },
      {
        name: 'the unspokenn name',
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576631770l/45046552.jpg',
        price: 380
      },
      {
        name: 'the book thief',
        img: 'http://ecx.images-amazon.com/images/I/51eQvANUsnL.jpg',
        price: 460
      },
      {
        name: 'sellowshipp of the ring',
        img: 'https://m.media-amazon.com/images/I/51SZ+xIbZnL._SL320_.jpg',
        price: 270
      },
      {
        name: 'the unspoken name',
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576631770l/45046552.jpg',
        price: 380
      },
      {
        name: 'the book thieff',
        img: 'http://ecx.images-amazon.com/images/I/51eQvANUsnL.jpg',
        price: 270
      }
    ]
  }
}
