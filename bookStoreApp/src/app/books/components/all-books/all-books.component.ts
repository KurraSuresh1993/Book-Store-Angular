import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../Models/book.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];

  constructor(public bookService: BookService) {}
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }
}
