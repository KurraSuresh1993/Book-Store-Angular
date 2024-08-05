import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @ContentChild(AuthorsAddressComponent) authAddress: AuthorsAddressComponent;
  @Input()
  data: number;
  @Input() data1: boolean;
  @Input() author: AuthorModel;
  public childCount: number = 0;
  constructor() {
    //console.log('Hello from Child Constructor');
  }
  ngOnDestroy(): void {
    console.log('Authors component destroy');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit ' + this.authAddress?.address);
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked ' + this.authAddress?.address);
  }
  ngOnInit(): void {
    // console.log('Hello from Child ng Onit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
  }
  public incCount(): void {
    this.childCount++;
  }
}
