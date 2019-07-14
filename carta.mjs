import { valores, palos, winCondition } from './herramientas.mjs';

class Carta {
    constructor(v, p){  //v = valor, p = palo/suit
        this.valor = v;
        this.palo = palos[p];
        this.rango = valores[v];
    }

    infoCarta(){
        return `${this.rango.toString()} de ${this.palo}`;
    }
}

export { Carta };

let card = new Carta(14, "C");

// console.log(card.infoCarta());