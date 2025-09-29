import type { Book } from "./models/Book.js";
import { BookStatus } from "./models/BookStatus.js";
import { BookCategory } from "./models/BookCategory.js";

const book1: Book = {
  id: "b1",
  title: "A Brief History of Time",
  author: "Stephen Hawking",
  releaseYear: 1988,
  categories: [BookCategory.SCIENCE, BookCategory.HISTORY],
  status: BookStatus.AVAILABLE
};

const book2: Book = {
  id: "b2",
  title: "Clean Code",
  author: "Robert C. Martin",
  releaseYear: 2008,
  categories: [BookCategory.TECHNOLOGY],
  status: BookStatus.AVAILABLE
};
