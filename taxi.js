"use strict";

// Création d'un tableau contenant les musiques et artistes de 5 musiques. 
let musiques = ["Anissa - Wejdene", "Bora Bora - Kam prada", "spiral - LONGMAN", "Memory Reboot - VOJ/Narvent", "HOPE - NF"];


// Création d'une classe Personnage utilisée pour créer le passager.
class Personnage {

    constructor(prenom, sante=10) { 
        this.prenom = prenom;
        this.sante = sante;
    }
}

// Fonction qui lance la création du passager (objet de la classe Personnage).
// Puis crée une partie (objet de la classe Trajet) qui prend en paramètre le joueur, une radio, le nombre de feux rouges et de changements.
function creerPersonnage() {
    let passager = new Personnage("Mattéo", 10);
    let partie = new Trajet(passager, true, 30, 0);

    // Appel de la méthode .rouler() de la classe Trajet pour lancer la course.
    partie.rouler();                                            
}


// Création d'une classe Trajet avec une méthode .rouler()
class Trajet {

    constructor(passager, radio, feuxRouges, Changements) {
        this.passager = passager;
        this.radio = radio;
        this.feuxRouges = feuxRouges;
        this.Changements = Changements;
    }

    // Méthode qui fait fonctionner la course tant qu'il reste des feux rouges.
    rouler() {
        while (this.feuxRouges > 0) {
            let musique = Math.floor(Math.random() * musiques.length);
            this.radio = musiques[musique];
            
            // Si la radio lance la musique de Wejdene, le passager perd 1pt de sante, il change de taxi et passe le feu rouge.
            if (this.radio == musiques[0]) {
                this.passager.sante -= 1;
                this.feuxRouges -= 1;
                this.Changements += 1

            // Sinon il passe juste le feu rouge.
            } else {
                this.feuxRouges -=1;
            }
            
            console.log("Musique jouée :", this.radio, " | Feux rouges restants :", this.feuxRouges); // Affichage de la musique jouée et du nombre de feux restants.

            // Si le passager n'a plus de santé et qu'il reste des feux rouges, c'est perdu.
            if (this.passager.sante == 0 && this.feuxRouges != 0) {
                console.log("EXPLOSION 💥 !! Vous n'avez plus de PV.");
                break;

            // Sinon si le passager a encore de la santé et qu'il ne reste plus de feux rouges, c'est gagné.
            } else if (this.passager.sante > 0 && this.feuxRouges == 0) {
                console.log("Vous êtes arrivé à destination ! Nombre de changements de taxi faits :", this.Changements);
                break;

            // Sinon si le passager perd son dernier PV au dernier feu, il gagne quand même.
            } else if (this.passager.sante == 0 && this.feuxRouges == 0) {
                console.log("Vous arrivez de justesse ! Nombre de changements de taxi faits :", this.Changements)
            }
        }
    }
}


// Fonction qui demande si le joueur veut lancer un trajet grâce à un prompt.
function start() {
    let commencer = prompt("Lancer un trajet ? oui/non")
    
    // Si "oui" alors on lance la fonction creerPersonnage()
    if (commencer) {
        if (commencer.toLowerCase() == "oui") {
            creerPersonnage()
     
        // Sinon ça envoie un message dans la console et ne lance pas de trajet.
        } else {
            console.log("Vous avez décidé de ne pas jouer. (Relancez la page pour jouer)")
        }
    }
}

// Appel de la fonction start() pour lancer automatiquement la fonction au reload de la page.
start()


