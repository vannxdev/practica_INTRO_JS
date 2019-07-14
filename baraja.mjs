import { valores, palos, winCondition } from "./herramientas.mjs";
import { Carta } from "./carta.mjs";

class Baraja {
  constructor() {
    this.baraja = [];

    for (let i = 0; i < Object.keys(palos).length; i++) {
      for (let j = 0; j < Object.keys(valores).length; j++) {
        const carta = new Carta(Object.keys(valores)[j], Object.keys(palos)[i]);
        this.baraja.push(carta);
      }
    }
  }

  infoBaraja() {
    for (let i = 0; i < this.baraja.length; i++) {
      this.baraja[i] = this.baraja[i].infoCarta();
    }
    return this.baraja;
  }

  cogerCarta(){
      if(this.baraja.length == 0){
          return null;
      } else {
          let c = Math.floor(Math.random() * this.baraja.length);
          let carta = this.baraja[c];
          this.baraja.splice(c, 1);
          return carta;
      }
  }

  manoAleatoria() {
    this.mano = [];

    for (let i = 0; i < 5; i++) {
      // la i va hasta 5 porque una mano solo puede tener 5 cartas
      this.mano.push(this.cogerCarta());
    }
    return this.mano;
  }
}

export {Baraja};