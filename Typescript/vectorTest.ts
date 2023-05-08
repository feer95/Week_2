import { Vector } from "./vector";

let vector1 = new Vector(5, 10);
vector1.print();

let vector2 = new Vector(5, 10);
vector2.print();

let suma = vector1.add(vector2);
suma.print();

let resta = vector1.subs(vector2);
resta.print();

let multiplicacion = vector1.mult(vector2);
multiplicacion.print();

let multiplicacionNumero = vector1.multNumber(5);
multiplicacionNumero.print();

