"use strict";


// Déclaration d'un objet (dictionnaire en py) d'un élève comportant son prénom, sa nourriture favorite et sa ville.
let eleve = {
    nom:'Nicolas',
    nourritureFavorite:"Salad",
    ville:"Paris",
}

// Renvoie un tableau des valeur de "eleve"
let values = Object.values(eleve);
console.log(values)

// Méthode .reduce() qui prend en paramètre key/value 
// Compte la taille totale des valeurs du tableau.
let count = values.reduce((accumulator, value) => accumulator + value.length, 0)
console.log(count);