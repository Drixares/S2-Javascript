"use strict";


// Déclaration de 3 variables. 2 prénoms et un résultat.
let nom ="jean";
let nom2 = "Paul";
// result renvoie le résultat de la fonction checkName()
let result=checkName(nom,nom2)

// Fonction qui prend en paramètre 2 valeurs.
// Compare si les 2 valeurs en paramètres sont les mêmes.
function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);