const valores = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: "J",
  12: "Q",
  13: "K",
  14: "A"
};

const palos = {
    H: "Corazones",     //corazones / hearts = "H"
    D: "Diamantes",     //diamantes / diamonds = "D"
    C: "Tréboles",      //treboles / clubs = "D"
    S: "Picas"          //picas / Spades = "S"
}

const winCondition = {                      //cada combinacion tiene un valor que se le da en la clase mano
                                            //le he dado valores de 5 en 5 empezando por el 1
  highCard: "Carta alta",                   //valor = 1
  onePair: "Pareja",                        //valor = 5
  twoPairs: "Dobles Parejas",               //valor = 10
  threeOfAKind: "Trio",                     //valor = 15
  straight: "Escalera",                     //valor = 20
  flush: "Color",                           //valor = 25
  fullHouse: "Full",                        //valor = 30
  fourOfAKind: "Poker",                     //valor = 35
  straightFlush: "Escalera de Color"        //valor = 40
};


export { valores, palos, winCondition };