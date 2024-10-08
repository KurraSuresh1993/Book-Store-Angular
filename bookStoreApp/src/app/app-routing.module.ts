import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './public/components/home/home.component';
import { AboutUsComponent } from './public/components/about-us/about-us.component';
import { HowItWorksComponent } from './public/components/how-it-works/how-it-works.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'books',
    component: BooksComponent,
    loadChildren: () =>
      import('./books/books.module').then((x) => x.BooksModule),
  },
  {
    path: 'user/:userid',
    component: UserComponent,
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
