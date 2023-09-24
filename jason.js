"use strict";

/*
* 1 tueur "Jason" avec 50pv. Quand il attaque :
    - soit le survivant meurt                     ✅
    - soit le survivant esquive et inflige 10dmg  ✅
    - soit le survivant inflige 15dmg mais meurt  ✅
|    
* Les morts sont affichées à la fin. ✅
|
* Caractéristiques de spersonnages et noms | proba de mourir, proba de dmg 
et de mourir en mettant des dégâts ✅
|
* 5 survivants avec nom généré aléatoirement d'un tableau de prénoms ✅
|
* Message attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg,
Jason est mort, les survivants ont gagné mais RIP à X, X, X...) ✅
|
*/

// Initialisation des variables caractéristiques, prénoms, stats et de Jason.
let caractéristiques = ["nerd", "sportif", "otaku", "geek", "chinois"];                             // Tableau des caractéristiques
let prenoms = ["Mattéo", "Adrien", "Gaspard", "Martin", "Dorian"];                                  // Tableau des prénoms
let stats = [[0.2, 0.6, 0.2], [0.5, 0.3, 0.2], [0.3, 0.3, 0.4], [0.6, 0.2, 0.2], [0.2, 0.5, 0.3]];  // Tableau de tableau des stats de probabilité.
let survivants = [];                                                                                   // Tableau où sera ajouté les objets Personnage.
let survivantsMorts = [];                                                                           // Tableau des personnes mortes. (Hors Jason)
let tueur = ["Jason", 50];                                                                          // Variable qu définit Jason


// Création d'une classe Personnage pour créer les survivants.
class Personnage {

    constructor(nom, caractéristique, probaDead, probaDmg, probaDmgDead) {
        this.nom = nom;
        this.caractéristique = caractéristique;
        this.probaDead = probaDead;
        this.probaDmg = probaDmg;
        this.probaDmgDead = probaDmgDead;

    }
}


// Fonction combat() qui vérifie si le combat doit continuer ou non.
function combat() {
    let affichageMort = "";

    // Si il reste des survivants en vie et que Jason a toujours des PV. 
    if (survivants.length >= 1 && tueur[1] > 0) {
        let indiceSurvivantAleatoire = Math.floor(Math.random() * survivants.length);  // Chiffre aléatoire entre [0, 5[
        let survivantCible = survivants[indiceSurvivantAleatoire]                      // Survivant positionné à l'indice indiceSurvivantAleatoire dans le tableau survivants

        // Appel de la fonction attaqueTueur avec comme paramètres le survivant et son indice.
        attaqueTueur(survivantCible, indiceSurvivantAleatoire)
        
    // Sinon si il reste des survivants mais que Jason est mort
    } else if (survivants.length >= 1 && tueur[1] <= 0) {

        // Boucle d'affichage qui permet de concaténer "et", " " ou ", " en fonction du positionnement du survivant dans survivantsMort.
        // (Permet d'avoir un meilleur affichage de fin)
        for (let i = 0; i < survivantsMorts.length; i++) {
            let test = survivantsMorts[i]; 

            if (survivantsMorts.length > 1) {
                if (test == survivantsMorts[survivantsMorts.length - 1]) {
                    affichageMort += `et ${test}.`;                                                  // affichageMort += "et " + test + "."
                    
                } else if (test == survivantsMorts[survivantsMorts.length - 2]) {
                    affichageMort += `${test} `                                                      // affichage = affichage + test + " "
                } else {
                    affichageMort += `${test}, `;
                }
            } 
            else {
                affichageMort += `${test}`
            }
        }

        // Vérifie si il y a eu des morts parmi les survivants et affiche le bon message en conséquence.
        if (survivantsMorts.length == 0) {
        console.log("Jason est mort ! Aucune victime n'est à déplorer chez les survivants !")
        } else {
            console.log("Jason est mort ! Mais RIP à", affichageMort + " 🪦")
        }

    // Sinon si les survivants sont morts et que le tueur a encore des PV.
    } else if (survivants.length == 0 && tueur[1] > 0) {
        console.log("Jason a gagné, il ne reste plus aucun survivant.");

    // Sinon si les survivants et le tueur sont morts.
    } else if (survivants.length == 0 && tueur[1] <= 0) {
        console.log("Tout le monde est mort...", affichageMort + " 💀");
    }
}


// Fonction attaqueTueur(p1, p2) qui réalise 1 évènement parmi les 3 conditions en focntion des probabilités et d'un chiffre aléatoire.
function attaqueTueur(survivantCible, indiceSurvivantAleatoire) {
    let valeurAleatoire = Math.random();  // Chiffre aléatoire entre 0 et 1

    // Si x est inférieur à la probaDead, le survivant meurt.
    if (valeurAleatoire < survivantCible["probaDead"]) { 
        console.log("Jason a tué", survivantCible["nom"]);
        survivantsMorts.push(survivantCible["nom"]);
        survivants.splice(indiceSurvivantAleatoire, 1);

    // Si x est inférieur à (probaDead + probaDmg), le survivante esquive et met 10 dégâts à Jason.
      } else if (valeurAleatoire < survivantCible["probaDead"] + survivantCible["probaDmg"]) {
        console.log(survivantCible["nom"],"esquive et met 10 dégâts à Jason !");
        tueur[1] -= 10;

    // Sinon le survivant se sacrifie en mettant 15 dégâts à Jason.
      } else  { 
        console.log(survivantCible["nom"] ,"se sacrifie et met 15 dégâts à Jason !");
        tueur[1] -= 15;
        survivantsMorts.push(survivantCible["nom"]);
        survivants.splice(indiceSurvivantAleatoire, 1);
      }


    // console.log("Survivants morts :", survivantsMorts);

    combat()

};



// Fonction start() qui se lance au click du bouton. 
function start() {
    let btn = document.getElementById('btn');
    btn.innerHTML = "Regardez la console"

    // Pour chaque nom dans le tableau prenoms, une caractéristique et des stats vont être mis chacune dans une variable.
    prenoms.forEach(nom => { 
    let i = Math.floor(Math.random() * caractéristiques.length); // Nombre aléatoire entre 0 et 4    [0, 5[
    let caractéristique = caractéristiques.splice(i, 1);         // Prend UN élément du tableau caractéristiques A PARTIR de l'index i en le retirant du tableau.

    let j = Math.floor(Math.random() * stats.length);            // Nombre aléatoire entre 0 et 4    [0, 5[
    let statPerso = stats.splice(j, 1);                          // Prend UN élément du tableau stats A PARTIR de l'index j en le retirant du tableau.

    // Un object de la class Personnage est créé puis ajouté au tableau survivants.
    let joueur = new Personnage(nom, caractéristique, statPerso[0][0], statPerso[0][1], statPerso[0][2]);
    survivants.push(joueur)
    });

    combat()

    console.log("---- Recharger la page et clicker sur le bouton pour relancer une course ----");
}


/*<========================= TEST D'AFFICHAGE =======================================================>*/

// console.log(survivants);
// console.log(Math.random())
// console.log(survivants[0]["probaDmg"])


