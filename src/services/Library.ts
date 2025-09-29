import type { Book } from "../models/Book.js";
import type { User } from "../models/User.js";
import { BookStatus } from "../models/BookStatus.js";
import { BookCategory } from "../models/BookCategory.js";

export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  borrowBook(userId: string, bookId: string): void {
    const book = this.books.find(b => b.id === bookId);
    const user = this.users.find(u => u.id === userId);

    if (!book) throw new Error("Book not found");
    if (!user) throw new Error("User not found");

    if (book.status === BookStatus.BORROWED) {
      throw new Error("Book already borrowed");
    }

    book.status = BookStatus.BORROWED;
    user.borrowedBooks.push(bookId);
  }

  returnBook(userId: string, bookId: string): void {
    const book = this.books.find(b => b.id === bookId);
    const user = this.users.find(u => u.id === userId);

    if (!book || !user) throw new Error("Invalid user or book");

    book.status = BookStatus.AVAILABLE;
    user.borrowedBooks = user.borrowedBooks.filter(id => id !== bookId);
  }

  listBooksByCategory(category: BookCategory): Book[] {
  return this.books.filter(book => book.categories.includes(category));
}

listBooksByYear(year: number): Book[] {
  return this.books.filter(book => book.releaseYear === year);
}
}
