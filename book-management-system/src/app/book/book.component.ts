import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  // book : Book = {
  //   id: 1,
  //   title : "Revolution",
  //   author : "Chetan Bhagat"
  // }

  title: string = '';
  author: string = '';

  addBook(): void {
    
    console.log(`Title: ${this.title}, Author: ${this.author}`);


    this.title = '';
    this.author = '';
  }
}
