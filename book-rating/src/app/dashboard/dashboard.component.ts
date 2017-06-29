import { BookComponent } from './../book/book.component';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Book } from './../shared/book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  books: Book[]; // vorher: string[]

  @ViewChild(BookComponent)
  firstBookComponent: BookComponent;

  subscribtion: Subscription;

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('12345678', 'Angular', 'Angular rocks! <3', 4),
      new Book('98765432', 'AngularJS 1.x', 'Oldie but goldie', 3)
    ];
    this.reorderBooks(null);
  }

  ngAfterViewInit() {
    this.subscribtion = this.firstBookComponent.rated
      .filter(b => b.title === 'Angular')
      .map(b => b.title)
      .subscribe((title) => {
        console.log(title)
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  reorderBooks(book: Book) {
    // console.log('Hallo Buch:', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
