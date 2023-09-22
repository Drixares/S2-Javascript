"use strict";


// Déclaration d'une variable "a"
let a = 1;


// Boucle while qui fonctionne uniquement si a < 9.
// Compte de a+1 jusqu'à soit 6/7/8 ou 9 dans la console.
while(a < 9){
    a++
    if(a == 7){
        continue;
    }
    if(a == 8){
        break;
    }
    console.log(a);
}

console.log("J'ai cassé la boucle au bout de", a,"tours");