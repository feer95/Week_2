import {Book} from './book'
import {Library} from './library'

let book1 = new Book("El nuevo libro de Fernando", 230, "123456-7890", "Yo", "Editorial F");
let book2 = new Book("El segundo libro de Fernando", 400, "123456-12389", "Yo", "Editorial F");
let book3 = new Book("El tercer libro de Fernando", 400, "123456-12389", "Tu", "Editorial H");

let biblioteca1 = new Library ([book1, book2, book3], "Calle de la Biblioteca 321", "Paco Pérez");

console.log("Dirección de la biblioteca:", biblioteca1.getAddress());
console.log("Gerente de la biblioteca:", biblioteca1.getManager());

biblioteca1.setAddress("Nueva calle 987")
biblioteca1.setManager("Puri")

console.log("Dirección nueva:", biblioteca1.getAddress());
console.log("Gerente nueva:", biblioteca1.getManager());

console.log("Numero de Libros", biblioteca1.getNumberOfBooks());

let booksByFernando = biblioteca1.findByAuthor("Yo");
console.log("Libros escritos por Fernando:");
for (let book of booksByFernando) {
    console.log(book.toString());
}





