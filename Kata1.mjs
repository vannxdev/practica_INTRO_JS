//Nombre: Jesús Tomás
//Práctica Intro_JS Keepcoding, Kata 1

function fooBarQuix(number) {
  let aux = number;
  let cadena = aux.toString(); //convertimos el numero en string
  let arr = cadena.split(""); //convertimos el string en un array;

  //comprobar si es divisible
  if (number >= 1 && number <= 100) {
    //divisible por 3
    if (aux % 3 == 0) {
      if (typeof number === "number") {
        number = "Foo";
      } else {
        number += "Foo";
      }
    }
    //divisible por 5
    if (aux % 5 == 0) {
      if (typeof number === "number") {
        number = "Bar";
      } else {
        number += "Bar";
      }
    }

    //divisible por 7
    if (aux % 7 == 0) {
      if (typeof number === "number") {
        number = "Quix";
      } else {
        number += "Quix";
      }
    }

    //comprobar si contiene los números 3, 5 o 7
    // console.log(cadena.length);
    if (cadena.length > 1) {
      //si la cadena tiene mas de 1 digito entra en el if

      //si el primer dígito del array es 3
      if (arr[0] == 3) {
        if (typeof number === "number") {
          number = "Foo";
        } else {
          number += "Foo";
        }
      }
      

      //si el primer dígito del array es 5
      if (arr[0] == 5) {
        if (typeof number === "number") {
          number = "Bar";
        } else {
          number += "Bar";
        }
      }

      //si el primer dígito del array es 7
      if (arr[0] == 7) {
        if (typeof number === "number") {
          number = "Quix";
        } else {
          number += "Quix";
        }
      }

      //comprobar segundo dígito del array

      //si el segundo dígito es 3
      if (arr[1] == 3) {
        if (typeof number === "number") {
          number = "Foo";
        } else {
          number += "Foo";
        }
      }

      //si el segundo dígito es 5
      if (arr[1] == 5) {
        if (typeof number === "number") {
          number = "Bar";
        } else {
          number += "Bar";
        }
      }

      //si el segundo dígito es 7
      if (arr[1] == 7) {
        if (typeof number === "number") {
          number = "Quix";
        } else {
          number += "Quix";
        }
      }
    } else {
        if (aux == 3){
            if (typeof number === "number") {
                number = "Foo";
              } else {
                number += "Foo";
              }
        }
        if (aux == 5){
            if (typeof number === "number") {
                number = "Bar";
              } else {
                number += "Bar";
              }
        }
        if (aux == 7){
            if (typeof number === "number") {
                number = "Quix";
              } else {
                number += "Quix";
              }
        }
    }
  } else {
    number = "El número introducido no es correcto";
  }
  return number;
}

// console.log(fooBarQuix(-1));
// console.log(fooBarQuix(101));
// console.log(fooBarQuix(1));
// console.log(fooBarQuix(2));
// console.log(fooBarQuix(3));
// console.log(fooBarQuix(4));
// console.log(fooBarQuix(5));
// console.log(fooBarQuix(6));
// console.log(fooBarQuix(7));
// console.log(fooBarQuix(8));
// console.log(fooBarQuix(9));
// console.log(fooBarQuix(10));
// console.log(fooBarQuix(13));
// console.log(fooBarQuix(15));
// console.log(fooBarQuix(21));
// console.log(fooBarQuix(33));
// console.log(fooBarQuix(51));
// console.log(fooBarQuix(53));
// console.log(fooBarQuix(75));

export { fooBarQuix };