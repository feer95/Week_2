import {Person} from './person';

export class Contacts {
    // Atributos
    public people: Person[];

    //Contructor
    constructor() {
        this.people = [];
    }

    //Métodos
    addPerson(person: Person) {
        this.people.push(person);
    }
    printCalendar() {
        for (let person of this.people) {
        console.log(`${person.name} - ${person.age} - ${person.getAddress()}`);
    }}
}
