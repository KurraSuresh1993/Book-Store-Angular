import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: 'recentbooks', component: RecentBooksComponent },
  { path: 'new', component: AddBookComponent },
  { path: 'newreactive', component: AddBookReactiveComponent },
  {
    path: ':id',
    component: BookDetailsComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
