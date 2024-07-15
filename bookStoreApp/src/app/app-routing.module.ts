import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/components/home/home.component';
import { AllBooksComponent } from './public/components/all-books/all-books.component';
import { BookDetailsComponent } from './public/components/book-details/book-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'book-details', component: BookDetailsComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
