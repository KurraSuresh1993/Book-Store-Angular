import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryparam) => {
      this.name = queryparam['name'];
      this.email = queryparam['email'];
    });
  }

  goToSignup(): void {
    this.router.navigate(['auth/signup']);
  }
  goToBookDetails(): void {
    this.router.navigate(['public/book-details', 10, 'author', 111], {
      queryParams: { name: 'naresh', email: 'raj@gmailc.om' },
    });
  }
}
