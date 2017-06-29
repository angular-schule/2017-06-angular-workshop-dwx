import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookStoreService {

  books: Book[];

  constructor() {
    this.books = [
      new Book('12345678', 'Angular', 'Angular rocks! <3', 4),
      new Book('98765432', 'AngularJS 1.x', 'Oldie but goldie', 3)
    ];
  }

  getAll(): Book[] {
    return this.books;
  }

  getSingle(isbn: string) {
    return this.books.find(b => b.isbn === isbn);
  }
}
