const Person = require("./person")

class Contacts {

    constructor() {
        this.persons = []
    }

    printPersons() {
        for (let i = 0; i < this.persons.length; i++) {
            let person = this.persons[i];
            console.log(`Nombre: ${person.nombre}`);
            console.log(`Apellido: ${person.apellido}`);
            console.log(`Edad: ${person.edad(2023)}`);
            console.log(`Altura: ${person.altura}`);
            console.log(`Peso: ${person.peso}`);
            console.log(`Hobbies:`);
            for (let j = 0; j < person.hobbies.length; j++) {
              console.log(`- ${person.hobbies[j]}`);
            }
        }
    }
}

let persona2 = new Person ("Fer", "Vega", 160, 80, 1980, ["Viajar", "Montar en Bici", "Naturaleza"])
let contacts = new Contacts();
contacts.persons.push(persona2);

contacts.printPersons();

module.exports = Contacts;