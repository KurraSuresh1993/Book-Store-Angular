import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  public data: number;
  public setData(value: number): void {
    this.data = value;
  }
}
