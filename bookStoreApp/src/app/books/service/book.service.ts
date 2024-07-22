import { Injectable } from '@angular/core';
import { BookModel } from '../Models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  public getBooks(): any[] {
    return [
      {
        id: 1,
        title: 'DotNetCore',
        totalPages: 200,
        author: 'Suresh',
        price: {
          currency: 'INR',
          value: 1999.99,
        },
      },
      {
        id: 2,
        title: 'C#.Net',
        totalPages: 300,
        author: 'Jane Smith',
        price: {
          currency: 'USD',
          value: 299,
        },
      },

      {
        id: 3,
        title: 'ASP.NET',
        totalPages: 250,
        author: 'Alex Johnson',
        price: {
          currency: 'GBP',
          value: 14.99,
        },
      },
      {
        id: 4,
        title: 'Angular',
        totalPages: 180,
        author: 'Emily Brown',
        price: {
          currency: 'CAD',
          value: 17.49,
        },
      },

      {
        id: 5,
        title: 'React',
        totalPages: 320,
        author: 'Michael Lee',
        price: {
          currency: 'USD',
          value: 21.99,
        },
      },
      {
        id: 6,
        title: 'WEB API',
        totalPages: 280,
        author: 'Sophie Adams',
        price: {
          currency: 'EUR',
          value: 19.49,
        },
      },
      {
        id: 7,
        title: 'MVC',
        totalPages: 220,
        author: 'David Chen',
        price: {
          currency: 'GBP',
          value: 16.99,
        },
      },
      {
        id: 8,
        title: 'DESIGN PATTERNS',
        totalPages: 400,
        author: 'Linda Garcia',
        price: {
          currency: 'CAD',
          value: 23.79,
        },
      },
      {
        id: 9,
        title: 'SOLID PRINCIPLES',
        totalPages: 350,
        author: 'Olivia White',
        price: {
          currency: 'USD',
          value: 18.49,
        },
      },
      {
        id: 10,
        title: 'SQL SERVER',
        totalPages: 180,
        author: 'Robert Johnson',
        price: {
          currency: 'EUR',
          value: 14.99,
        },
      },
    ];
  }
}
