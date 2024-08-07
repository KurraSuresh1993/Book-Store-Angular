import { Component, Input } from '@angular/core';
import { BookModel } from '../../Models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  @Input('allbooks')
  public set books(books: BookModel[]) {
    books.map((x) => x.title);
    this._books = books;
  }
  public get books() {
    return this._books;
  }
  private _books: BookModel[];
}
