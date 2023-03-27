/*
*   The Book class is responsible for information about the book.
*   The BookService class is responsible for the CRUD operations with books.
*/


import { Book } from "./components/Book/Book.js";
import { BookService } from "./components/BookService/BookService.js";

const app = () => {
    const bookService = new BookService();

    bookService.save(new Book("Harry Potter and the Prisoner of Azkaban", "J.K. Rowling", " Scholastic Inc.", 100));
    bookService.save(new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", " Scholastic Inc.", 85));
    console.table(bookService.getAll());
    
    const foundBook = bookService.findByTitle("Harry Potter and the Philosopher's Stone");
    console.log("[FOUND BOOK]" , foundBook);

    bookService.setPrice("Harry Potter and the Philosopher's Stone", 300);
    const bookAfterUpdating = bookService.findByTitle("Harry Potter and the Philosopher's Stone");
    console.log("[BOOK AFTER UPDATING]" , bookAfterUpdating);

    bookService.delete("Harry Potter and the Philosopher's Stone");
    const bookAfterDeleting = bookService.findByTitle("Harry Potter and the Philosopher's Stone");
    console.log("[BOOK AFTER DELETING]" , bookAfterDeleting);
    
    console.table(bookService.getAll());
}

app();