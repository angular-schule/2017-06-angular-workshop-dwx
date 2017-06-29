import { BookStoreService } from './../shared/book-store.service';
import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Book = new Book('11111', 'TODO', '', 0);

  constructor(private route: ActivatedRoute,
    private bs: BookStoreService) { }

  ngOnInit() {
    this.isbn = this.route.snapshot.params.isbn;
    this.book = this.bs.getSingle(this.isbn);

    /* this.route.params.subscribe(
      params => this.isbn = params.isbn;
    ); */
  }

}
