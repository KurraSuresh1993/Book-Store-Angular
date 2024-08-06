import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { BookModel } from '../../Models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(private _bookService: BookService) {}
  ngOnInit(): void {}
  addBook(value: any): void {
    console.log(value);
    var book: BookModel = new BookModel();
    book.title = value.title;
    book.author = value.author;
    book.totalPages = value.pages;
    book.publishedOn = value.publishedOn;
    book.isPublished = value.isPublished;

    book.price = { currency: 'INR', value: value.price };
    this._bookService.addBook(book);
  }
}
