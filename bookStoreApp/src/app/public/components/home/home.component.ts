import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorModel } from 'src/app/shared/models/authors.model';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
  @ViewChild('btnCounter') btnCounter: ElementRef;
  @ViewChild(AuthorsComponent) authComponent: AuthorsComponent;
  private time: any;
  public address: string = 'india';
  public count: number = 0;
  public isAct: boolean = false;
  public auth: AuthorModel = { id: 100, name: 'suresh' };
  constructor() {
    // console.log('Hello from Parent Constructor');
  }
  ngOnDestroy(): void {
    clearInterval(this.time);
    console.log('Home Component Destroy');
  }
  ngAfterViewChecked(): void {
    // console.log(this.authComponent.childCount);
  }
  ngAfterViewInit(): void {
    //console.log(this.btnCounter);
    this.btnCounter.nativeElement.innerHTML = 'updated button text';
  }
  ngDoCheck(): void {
    // console.log(this.auth);
  }

  ngOnInit(): void {
    //  console.log('Hello from Parent ng Onit');
    this.timer();
  }
  public counter(): void {
    this.count++;
    this.isAct = !this.isAct;
    this.auth.id = this.count++;
    // this.auth = { id: 222, name: 'test' };
    this.address += this.count;
  }
  timer(): void {
    this.time = setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}
