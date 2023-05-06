import {Book} from './book'

export class Library {
    // Atributos    
    private books: Book[];
    private address: string;
    private manager: string;

    // Contructor
    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    // Métodos
        // Getters
    getAddress(): string {
        return this.address;
    }
    getManager(): string {
        return this.manager;
    }
        // Setters
    setAddress(address: string): void {
        this.address = address;
    }
    setManager(manager: string): void {
        this.manager = manager;
    }
        // Tostring()
    toString(): string {
        let booksInfo = "";
        for (let i = 0; i < this.books.length; i++) {
            booksInfo += this.books[i].toString();  
            if (i < this.books.length - 1) {
                booksInfo += '\n';
            }
        }

        return `Address: ${this.address}\nManager: ${this.manager}\n\n${booksInfo}`;
    }

    // Get (nLibros)
    getNumberOfBooks(): number {
        return this.books.length;
    }
    // Método por autor
    findByAuthor(author: string): Book[] {
        let librosAutor: Book [] = [];

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                librosAutor.push(this.books[i])
            }
        }
        return librosAutor;
    }

}

let book1 = new Book("El nuevo libro de Fernando", 230, "123456-7890", "Yo", "Editorial F");
let book2 = new Book("El segundo libro de Fernando", 400, "123456-12389", "Yo", "Editorial F");

let biblioteca = new Library([book1, book2], "Calle de la Biblioteca 123", "Juan Pérez");

console.log(biblioteca.toString());



