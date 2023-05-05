const Person = require("./person")

let personaPrueba = new Person("Alvaro", "Martin", 190, 95, 1980, ["Nadar", "Comprar", "Dormir"]);

console.log(personaPrueba.calcularImc());
console.log(personaPrueba.edad(2023));
personaPrueba.printAll();
personaPrueba.printHobbies();

