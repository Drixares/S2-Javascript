"use strict";


// Création d'une classe Pokemon
class Pokemon{

    // Initialisation des paramètres du Pokemon
    constructor(name,attack,defense,hp,luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    // Méthode pour les attaques. Si isLucky vaut True, l'attaque fonctione sinon non.
    attackPokemon(pokemon){
        if(this.isLucky()){
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name +' a attaqué '+ pokemon.name +' pour '+ damage +' de dégat, il lui reste '+ pokemon.hp +" points de vie");
        }else {
            console.log(this.name + " a raté son attaque");
        }
    }

    // Méthode qui renvoie False/True calculant la chance du Pokemon sur ses attaques
    isLucky(){
        return this.luck > Math.random()
    }
}

// Création de 2 Pokemons en utilisant la classe Pokemon
let dracofeu = new Pokemon('Dracofeu',14,8,100,0.5);
let boulbi = new Pokemon('Boulbi',18,4,70,0.8);


// Vérifie si les Pokemons sont morts ou non et relance la méthode attackPokemon en conséquence.
while(dracofeu.hp > 0 && boulbi.hp > 0){
    dracofeu.attackPokemon(boulbi)
    if(boulbi.hp <= 0){
        console.log(boulbi.name +" is dead !");
        break;
    }
    boulbi.attackPokemon(dracofeu)
    if(dracofeu.hp<=0){
        console.log(dracofeu.name+" is Dead !");
        break
    }
}