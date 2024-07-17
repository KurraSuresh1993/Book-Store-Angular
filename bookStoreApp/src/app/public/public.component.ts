import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent {
  bookId: number = 12;
  authorId: number = 100;
}
