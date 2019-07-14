//Nombre: Jesús Tomás
//Práctica Intro_JS Keepcoding
// Index desde el cual se llamará a todas las katas realizadas.

import {fooBarQuix} from "./Kata1.mjs";
import {romanoArabe, arabeRomano, validarRomano}  from "./Kata2.mjs";

console.log("***************KATA 1***************")
console.log("************************************")
console.log(fooBarQuix(-1));
console.log(fooBarQuix(101));
console.log(fooBarQuix(1));
console.log(fooBarQuix(2));
console.log(fooBarQuix(3));
console.log(fooBarQuix(4));
console.log(fooBarQuix(5));
console.log(fooBarQuix(6));
console.log(fooBarQuix(7));
console.log(fooBarQuix(8));
console.log(fooBarQuix(9));
console.log(fooBarQuix(10));
console.log(fooBarQuix(13));
console.log(fooBarQuix(15));
console.log(fooBarQuix(21));
console.log(fooBarQuix(33));
console.log(fooBarQuix(51));
console.log(fooBarQuix(53));
console.log(fooBarQuix(75));
console.log("************************************")
console.log("************************************")
console.log("************************************")
console.log("                                    ")


console.log("***************KATA 2***************")
console.log("************************************")
console.log(arabeRomano(1));
console.log(arabeRomano(46));
console.log(arabeRomano(93));
console.log(arabeRomano(111));
console.log(arabeRomano(503));
console.log(arabeRomano(2019));
console.log(arabeRomano(3999));
console.log(arabeRomano(4000));
console.log("************************************")
console.log("************************************")
console.log("************************************")
console.log(romanoArabe("MMMM"));
console.log(romanoArabe("MCMXCI"));
console.log(romanoArabe("MMXIX"));
console.log(romanoArabe("DCLXVI"));
console.log(romanoArabe("MCCXXXIV"));
console.log(romanoArabe("LMM"))
console.log("************************************")
console.log("************************************")
console.log("************************************")
console.log(validarRomano("III"));  //true
console.log(validarRomano("IV"));   //true
console.log(validarRomano("IIV"));  //false
console.log(validarRomano("IIX"));  //false
console.log(validarRomano("XXVVI"));//false
console.log(validarRomano("XLC"));  //false
console.log(validarRomano("CM"));   //true
console.log(validarRomano("LL"));   //false
console.log(validarRomano("JJJ"));  //false
console.log(validarRomano("IIII")); //false
console.log(validarRomano("lx"));   //true
console.log(validarRomano("MMMM"));     //false
console.log(validarRomano(""));     //false