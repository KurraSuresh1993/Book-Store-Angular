import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../Models/book.model';
import { BookService } from '../../service/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';
import { Counter2Service } from 'src/app/shared/services/counter2.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = [];
  private _pageTitle: string;
  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle() {
    return this._pageTitle;
  }

  constructor(
    public bookService: BookService,
    public _counterService: Counter2Service
  ) {}
  ngOnInit(): void {
    var books: BookModel[];
    this.pageTitle = 'All Books';
    this.books = this.bookService.getBooks();
    // var obj = new BookModel();
    // allBooks.forEach((item) => {
    //   obj.id = item.id;
    //   obj.author = item.author;
    //   obj.title = item.title;
    //   obj.price = item.price;
    //   obj.totalPages = item.totalPages;
    //   this.books.push(obj);
    // });

    console.log(this.books);
  }

  increase(): void {
    this._counterService.incCounter();
  }
  decrease(): void {
    this._counterService.decCounter();
  }
}
