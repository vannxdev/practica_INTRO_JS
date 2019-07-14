//TEST KATA3
import { valores, palos, winCondition } from "./herramientas.mjs";
import { Carta } from "./carta.mjs";
import { Baraja } from "./baraja.mjs";

//Test cartas
const carta1 = new Carta(5, "C");
const carta2 = new Carta(13, "S");
const carta3 = new Carta(14, "H");
console.log("******************************************")
console.log("******************************************")
console.log("***************TEST CARTAS*****************")
console.log(carta1);
console.log(carta2);
console.log(carta3);

//Test Baraja
const baraja = new Baraja();
console.log("******************************************")
console.log("******************************************")
console.log("***************TEST BARAJA*****************")
console.log(baraja);

//Test mano aleatoria
const manoAleatoria = baraja.manoAleatoria();
console.log("******************************************")
console.log("******************************************")
console.log("***************TEST MANO ALEATORIA*****************")
console.log(manoAleatoria);


//Creo distintas manos para test

const mano1 = [
    new Carta(2, "H"),
    new Carta(5, "C"),
    new Carta(14, "S"),
    new Carta(3, "H"),
    new Carta(9, "D")
];

const mano2 = [
    new Carta(2, "H"),
    new Carta(2, "C"),
    new Carta(5, "S"),
    new Carta(3, "H"),
    new Carta(9, "D")
];

const mano3 = [
    new Carta(2, "H"),
    new Carta(5, "H"),
    new Carta(14, "H"),
    new Carta(3, "H"),
    new Carta(9, "H")
];

const mano4 = [
    new Carta(3, "H"),
    new Carta(3, "C"),
    new Carta(3, "S"),
    new Carta(5, "H"),
    new Carta(9, "D")
];

const mano5 = [
    new Carta(5, "H"),
    new Carta(5, "C"),
    new Carta(5, "S"),
    new Carta(5, "D"),
    new Carta(9, "D")
];
console.log("******************************************")
console.log("******************************************")
console.log("***************TEST MANOS*****************");
console.log(mano1);
console.log(mano2);
console.log(mano3);
console.log(mano4);
console.log(mano5);