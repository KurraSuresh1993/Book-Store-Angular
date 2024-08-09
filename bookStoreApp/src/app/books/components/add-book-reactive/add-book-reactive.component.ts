import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.css'],
})
export class AddBookReactiveComponent implements OnInit {
  public titleErrorMessage: string;
  public prices: any = [
    { value: 9, viewValue: '9' },
    { value: 99, viewValue: '99' },
    { value: 999, viewValue: '999' },
  ];
  public currencies: any = [
    { value: 'USD', viewValue: 'US Dollar' },
    { value: 'INR', viewValue: 'Indian Rupees' },
  ];
  public addBookForm: FormGroup;
  constructor(
    private _bookService: BookService,
    private _formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.initForm();
    // console.log(this.addBookForm.get('title')?.value);
    const titlecontrol = this.addBookForm.get('title');
    titlecontrol?.valueChanges.subscribe((x) => {
      this.validateTitleControl(titlecontrol as FormControl);
    });

    const formattypeControl = this.addBookForm.get('formatType');
    formattypeControl?.valueChanges.subscribe((x) => {
      this.formatTypeChanged(x);
    });
  }

  public get authors() {
    return <FormArray>this.addBookForm.get('authors');
  }
  private initForm(): void {
    this.addBookForm = this._formBuilder.group({
      title: ['test', [Validators.required, Validators.minLength(7)]],
      //author: '',
      totalPages: '',
      price: this._formBuilder.group({
        currency: '',
        value: '',
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuilder.array([
        this.getAuthorControl(),
        this.getAuthorControl(),
      ]),
    });
  }

  private getAuthorControl(): FormGroup {
    return this._formBuilder.group({
      fullName: '',
    });
  }
  public addMoreAuthors(): void {
    this.authors.push(this.getAuthorControl());
  }
  public removeAuthors(i: number): void {
    this.authors.removeAt(i);
  }
  public addBook(): void {
    console.table(this.addBookForm.value);
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value);
    } else {
      alert('form is invalid');
    }
  }
  updateFormValues(): void {
    this.addBookForm.patchValue({
      title: 'testdefault',
      author: 'suresh kurra',
    });
  }
  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage = '';
    if (
      titleControl.errors &&
      (titleControl.pristine || titleControl.touched)
    ) {
      this.titleErrorMessage = 'This is required field';
      // if (titleControl.errors?.required) {
      //   this.titleErrorMessage = 'This is required field';
      // } else if (titleControl.errors?.minLength) {
      //   this.titleErrorMessage = 'Minimum length is 15';
      // }
    }
  }
  public formatTypeChanged(formatType: string): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');
    if (formatType === 'pdf') {
      pdfControl?.addValidators(Validators?.required);
      docControl?.clearValidators();
    } else if (formatType === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }
    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }
}
