import { BookCategory } from "./BookCategory.js";
import { BookStatus } from "./BookStatus.js";

export interface Book {
    id: string,
    title: string,
    author: string,
    releaseYear: number,
    categories: BookCategory[];
    status: BookStatus;
}