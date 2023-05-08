export class Person {
        // Públicos
    public name : string;
    public age : number;
        //Privados
    private address : string;

    // Constructor
    constructor (name:string, age:number, address:string) {
        this.name = name
        this.age = age
        this. address = address
    }

    // Métodos
    printName() :void {
        console.log(this.name);
    }
    yearOfBirth(currYear: number) :number {
        return currYear - this.age;
    }
    setAddress(address:string) :void {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
}


