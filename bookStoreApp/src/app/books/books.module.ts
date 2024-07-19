import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookService } from './service/book.service';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [AllBooksComponent, BookDetailsComponent, BooksComponent],
  imports: [CommonModule, PublicRoutingModule, MaterialModule],
})
export class BooksModule {}
