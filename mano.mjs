import { valores, palos, winCondition } from "./herramientas.mjs";
import { Carta } from "./carta.mjs";
import { Baraja } from "./baraja.mjs";

class Mano {
  constructor(mano) {
    // console.log(mano.length);
    if (Object.entries(mano).length === 5) {
      this.mano = mano;
      this.mano = this.mano.sort((a, b) => {
        if (parseInt(a.valor) > parseInt(b.valor)) return 1;
        if (parseInt(a.valor) < parseInt(b.valor)) return -1;
        return 0;
      });
      this.rango = {
        cartaMasAlta: 0,
        pareja: 0,
        doblesParejas: 0,
        trio: 0,
        escalera: 0,
        color: 0,
        full: 0,
        poker: 0,
        escaleraColor: 0
      };
      this.rangoMano();
    } else {
      throw "ERROR: La mano debe que tener 5 cartas.";
    }
  }

  rangoMano() {
    let onePair,
      twoPairs,
      threeOfAKind,
      straight,
      flush,
      fullHouse,
      fourOfAKind,
      straightFlush;

    for (let i = 0; i < this.mano.length; i++) {
      if (parseInt(this.mano[i].valor) > parseInt(this.rango.cartaMasAlta))
        this.rango.cartaMasAlta = this.mano[i].valor;
    }

    //comprobamos si tiene pareja
    onePair = this.esPareja();
    if (onePair) this.rango.pareja = 5;

    //comprobamos si tiene dobles parejas
    twoPairs = this.esDoblesParejas();
    if (twoPairs) this.rango.doblesParejas = 10;

    //comprobamos si tiene trios
    threeOfAKind = this.esTrio();
    if (threeOfAKind) this.rango.trio = 15;

    //comprobamos si es escalera
    straight = this.esEscalera();
    if (straight) this.rango.escalera = 20;

    //comprobamos si es color
    flush = this.esColor();
    if(flush) this.rango.color = 25;

    //comprobamos si es full
    fullHouse = onePair && threeOfAKind;
    if(fullHouse) this.rango.full = 30;
    
    //comprobamos si es poker
    fourOfAKind = this.esPoker();
    if(fourOfAKind) this.rango.poker = 35;
  }

  esPareja() {
    let res = false;
    for (let i = 0; i < this.mano.length; i++) {
      for (let j = 1; j < this.mano.length; j++) {
        if (i !== j) {
          if (this.mano[i].valor == this.mano[j].valor) {
            res = true;
            break;
          }
        }
      }
    }
    return res;
  }

  esTrio() {
    let res = false;
    for (let i = 0; i < this.mano.length; i++) {
      for (let j = 1; j < this.mano.length; j++) {
        for (let x = 0; x < this.mano.length; x++) {
          if (i !== j && i !== x && j !== x) {
            if (
              this.mano[i].valor == this.mano[j].valor &&
              this.mano[i].valor == this.mano[x].valor &&
              this.mano[j].valor == this.mano[x].valor
            ) {
              res = true;
              break;
            }
          }
        }
      }
    }
    return res;
  }

  esDoblesParejas() {
    let count = [];
    let i = 0;
    let res = false;
    this.mano.forEach(element => {
      i = element.valor;
      if (count[i] !== undefined) count[i]++;
      else count[i] = 1;
    });
    res = count.filter(valor => valor == 2).length == 2;
    return res;

    // let res = false;
    // for (let i = 0; i < this.mano.length; i++) {
    //   for (let j = 1; j < this.mano.length; j++) {
    //     if (i !== j) {
    //       if (this.mano[i].valor == this.mano[j].valor) {
    //         for (let x = 0; x < this.mano.length; x++) {
    //           for (let y = 1; y < this.mano.length; y++) {
    //             if (
    //               x !== j &&
    //               this.mano[x].valor == this.mano[y].valor &&
    //               this.mano[i].valor !== this.mano[x].valor
    //             )
    //               res = true;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // return res;
  }

  esEscalera() {
    let res = true;
    let cartaAnterior = undefined;
    let menor, mayor;

    this.mano.forEach(element => {
      if (cartaAnterior == undefined) {
        //aquí entrara siempre una vez para guardar la primera carta
        cartaAnterior = element.valor;
        menor = mayor = element.valor;
      } else {
        if (element.valor == mayor + 1) mayor = element.valor;
        else if (element.valor == menor - 1) menor = element.valor;
        else res = false;
      }
    });
    return res;
  }

  esColor() {

    let res = false, count = 0, aux = "";
    this.mano.forEach(element => {
        if(count == 0){
            aux = element.palo;
            count = 1;
        } else if (aux == element.palo) count++;
    })
    if(count == 5){
        res = true;
    }
    return res;
  }

  esPoker(){
      let res = false, count = 0, aux;
      this.mano.forEach(element => {
          if(count == 0){
              aux = element.valor;
              
              count = 1;
          } else if (aux == element.valor) count++;
      })
      if(count == 4){
          res = true;
      }
      return res;
  }
}

