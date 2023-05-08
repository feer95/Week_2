export class Vector {
    // Atributos
    private elements : number[];

    // Constructor
    constructor(n: number, k: number) {
        this.elements = new Array(n);

        for (let i = 0; i < n ; i++) {
            this.elements[i] = Math.floor(Math.random() * (k + 1));       
        }
    }

    // Metodos
    print(): void {
        console.log(this.elements);
    }

    add(v1: Vector ): Vector {
        let suma = new Vector (this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            suma.elements[i] = this.elements[i] + v1.elements[i]  
        }
        return suma
    }
    subs(v1: Vector ): Vector {
        let res = new Vector (this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            res.elements[i] = this.elements[i] - v1.elements[i]  
        }
        return res
    }
    mult(v1: Vector ): Vector {
        let multi = new Vector (this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            multi.elements[i] = this.elements[i] * v1.elements[i]  
        }
        return multi
    }
    multNumber(n: number ): Vector {
        let multN = new Vector (this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            multN.elements[i] = this.elements[i] * n  
        }
        return multN
    }
}

let vector = new Vector(5, 10);
vector.print()
let vec1 = new Vector(3, 3);
console.log(vec1.add(vec1));
