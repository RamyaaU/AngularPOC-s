import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  // book : Book = {
  //   id: 1,
  //   title : "Revolution",
  //   author : "Chetan Bhagat"
  // }

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");
    console.log('Retrieved books from localStorage:', savedBooks); // Debugging line
  
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
    console.log('Parsed books:', this.books); // Debugging line
  }

  title: string = '';
  author: string = '';

  books : Book [] = []

  addBook(){
    //alert(this.newAppointmentTitle + " "  + this.newAppointmentDate);
    if(this.title.trim().length && this.author)
    {
      let newBook : Book = {
        id: Date.now(),
        title: this.title,
        author: this.author
      }

      this.books.push(newBook)

      this.title = " ";
      this.author = " ";
      
      localStorage.setItem("books", JSON.stringify(this.books));
    }
  }

  //index : number -->remove the first element in our array that would be index zero
  deleteBook (index: number)
  {
    //splice is used to remove the first element and replace that with the next set of elements
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books));
  }
}
