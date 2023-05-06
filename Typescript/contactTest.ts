import {Person} from './person';
import {Contacts} from './contacts';

let contacts = new Contacts();

let person1 = new Person('Juan', 50, 'Calle 125');
contacts.addPerson(person1);

let person2 = new Person('María', 35, 'Calle 123');
contacts.addPerson(person2);

contacts.printCalendar();