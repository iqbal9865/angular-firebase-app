import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor( private bookservice: BooksService ) {}

  books: any;

  ngOnInit(): void {
    this.books = this.bookservice.getBooks();
  }
}
