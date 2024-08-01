import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { BookModel } from '../../Models/book.model';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.css'],
})
export class RecentBooksComponent implements OnInit {
  public recentBooks: BookModel[];
  constructor(private _bookService: BookService) {}
  ngOnInit(): void {
    this.getRecentBooks();
  }
  getRecentBooks(): void {
    this.recentBooks = this._bookService.getRecentBooks();
    console.log(this.recentBooks);
  }
}
