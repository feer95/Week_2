
import { Person } from "./person";


const person1 = new Person("Juan", 50, "Calle 125");

person1.printName();

const currentYear = 2023;
const yearOfBirth = person1.yearOfBirth(currentYear);
console.log(`Año de nacimiento: ${yearOfBirth}`);

person1.setAddress("Calle 126");
console.log(`Dirección: ${person1.getAddress()}`);