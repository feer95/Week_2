export class Book {
    // Atr. Privados
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    // Constructor
    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    // Getters

    getTitle(): string {
        return this.title;
    }
    getNPages(): number {
        return this.nPages;
    }
    getIsbn(): string {
        return this.isbn;
    }
    getAuthor(): string {
        return this.author;
    }
    getEditorial(): string {
        return this.editorial;
    }

    // Setters 

    setTitle(title: string): void {
        this.title = title
    }
    setNPages(nPages: number): void {
        this.nPages = nPages
    }
    setIsbn(isbn: string): void {
        this.isbn = isbn
    }
    setAuthor(author: string): void {
        this.author = author
    }
    setEditorial(editorial: string): void {
        this.editorial = editorial
    }

    // To string()

    toString(): string {
        return `Title: ${this.title}\nNumber of Pages: ${this.nPages}\nISBN : ${this.isbn}\nAuthor : ${this.author}\nEditorial : ${this.editorial}`;
    }
}