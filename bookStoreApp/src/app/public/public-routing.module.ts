import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'all-books', component: AllBooksComponent },
      {
        path: 'book-details/:id/author/:authorid',
        component: BookDetailsComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
