// Clase Persona

class Person {
// Atributos
    nombre = ""
    apellido = ""
    altura = 0
    peso = 0
    yearOfBirth = 0
    hobbies = []
// Constructor
    constructor(nombre, apellido, altura, peso, yearOfBirth, hobbies) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    this.peso = peso;
    this.yearOfBirth = yearOfBirth;
    this.hobbies = hobbies
    }
// Metodos
    calcularImc() {
        let alturaMetros = this.altura / 100;
        return this.peso / (alturaMetros * alturaMetros)
    }
    edad(currYear) {
        return currYear - this.yearOfBirth;
    }
    printAll() {
        console.log(`Nombre: ${this.nombre} - Apellido: ${this.apellido} - Altura: ${this.altura} cm - Peso: ${this.peso} kg - Año de nacimiento: ${this.yearOfBirth}`);
    }
    printHobbies() {
        this.hobbies.forEach(function(hobby) {
            console.log([hobby]);
        });
    }

}

let persona1 = new Person ("Alex", "Perez", 170, 80, 1996, ["Leer", "viajar", "Poo"])
console.log(persona1.calcularImc());
console.log(persona1.edad(2023));
persona1.printAll();
persona1.printHobbies();

module.export = Person;