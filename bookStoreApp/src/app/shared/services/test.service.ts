import { Injectable } from '@angular/core';
import { provideRouter } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TestService {
  public myData: string;
  public status: boolean = false;
  constructor() {}
}
