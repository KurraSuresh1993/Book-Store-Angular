import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors-address',
  templateUrl: './authors-address.component.html',
  styleUrls: ['./authors-address.component.css'],
})
export class AuthorsAddressComponent {
  @Input() address: string;
}
