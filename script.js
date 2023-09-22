
let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach(nom => {
    if (countCharacter(nom) > 5) {
        console.log(`${nom} est un prénom long de plus de 5 lettres.`)
    } else {
        console.log(`${nom} n'est pas du tout un prénom long.`)
    }
});





