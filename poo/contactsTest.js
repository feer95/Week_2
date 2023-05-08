const Person = require("./person")
const Contacts = require("./contacts");

let person1 = new Person ("Martin", "Martinez", 180, 80, 1990, ["Leer", "Deporte"])
let person2 = new Person ("Paco", "Perez", 165, 90, 1970, ["Comer", "Dormir"])

let contacts = new Contacts();
contacts.persons.push(person1);
contacts.persons.push(person2);

contacts.printPersons();