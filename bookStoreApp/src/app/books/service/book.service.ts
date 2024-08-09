import { Injectable } from '@angular/core';
import { BookModel } from '../Models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor(private _httpClient:HttpClient) {
   
  }
  public getBooks():Observable<BookModel[]> {
   return this._httpClient.get<BookModel[]>('https://localhost:44366/api/Books');
  }
  public getRecentBooks() {
    
  }
  public addBook(bookModel: BookModel): void {
    
  }
}
