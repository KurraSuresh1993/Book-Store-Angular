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
  public books: BookModel[];

  constructor(public bookService: BookService) {}
  ngOnInit(): void {
    //var books: BookModel[];
    //this.books = this.bookService.getBooks();
    //console.table(this.books);
    this.getAllBooks();
  }
private getAllBooks(){
  this.bookService.getBooks().subscribe(book=>{
    this.books=book;
    console.table(this.books);
  });
}

}
