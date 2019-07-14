//Nombre: Jesús Tomás
//Práctica Intro_JS Keepcoding, Kata 2

'use strict';

//Diccionario con los numeros romanos y sus respectivos en decimal
const rom = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

function arabeRomano(n) {
    let res = "";
    if (n < 4000 && n > 0){
        for (var i in rom){
            if (n >= rom[i]){
                res += i.repeat(Math.trunc(n/rom[i]));
                n -= rom[i] * Math.trunc(n/rom[i]);
            }
        }
        return res;
    } else {
        return "ERROR: El número debe estar entre el 1 y el 3999, inclusive"
    }

}
// console.log(arabeRomano(1));
// console.log(arabeRomano(46));
// console.log(arabeRomano(93));
// console.log(arabeRomano(111));
// console.log(arabeRomano(503));
// console.log(arabeRomano(2019));
// console.log(arabeRomano(3999));
// console.log(arabeRomano(4000));
// console.log("************************************")
// console.log("************************************")
// console.log("************************************")



function romanoArabe(s) {
    let res = 0;
    let aux = 0;

    if(validarRomano(s)){


    s = s.toUpperCase().split('');

    while(s.length){
        aux = rom[s.shift()];
        res += aux * (aux < rom[s[0]] ? -1 : 1);
    }
        return res;
    } else {
        return "ERROR: el número romano introducido no es válido! Y recuerda, sólo números entre el 1 y el 3999"
    }
}

// console.log(romanoArabe("MMMM"));
// console.log(romanoArabe("MCMXCI"));
// console.log(romanoArabe("MMXIX"));
// console.log(romanoArabe("DCLXVI"));
// console.log(romanoArabe("MCCXXXIV"));
// console.log(romanoArabe("LMM"))
// console.log("************************************")
// console.log("************************************")
// console.log("************************************")


function validarRomano(s) {
    const validateRegEx =   /^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/g;
    return validateRegEx.test(s.toUpperCase());
}
// console.log(validarRomano("III"));  //true
// console.log(validarRomano("IV"));   //true
// console.log(validarRomano("IIV"));  //false
// console.log(validarRomano("IIX"));  //false
// console.log(validarRomano("XXVVI"));//false
// console.log(validarRomano("XLC"));  //false
// console.log(validarRomano("CM"));   //true
// console.log(validarRomano("LL"));   //false
// console.log(validarRomano("JJJ"));  //false
// console.log(validarRomano("IIII")); //false
// console.log(validarRomano("lx"));   //true
// console.log(validarRomano(""));     //false

export { romanoArabe, arabeRomano, validarRomano };