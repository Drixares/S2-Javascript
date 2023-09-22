"use strict";


// Déclare un tableau vide.
let names=[];
// Ajoute 3 prénoms au tableau.
names.push('Vincent',"Paul",'Arthur');

// Méthode "forEach" qui permet de passer 1 par 1 sur chaque élément du tableau "names".
// Ici, chaque prénom du tableau est concaténé à la phrase "va à la pêche" puis et la phrase est affichée dans la console.
names.forEach(nom =>{
    nom += 'va a la peche ';
    console.log(nom)
})