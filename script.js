class Pokemon {
    constructor(name, type, attack){
        this.name = name;
        this.type = type;
        this.attack = attack
    }
    pokemonAttack() {
        return `${this.name} used ${this.attack} to attack!`
    }
}
const pokemon1 = new Pokemon('Pickachu,', 'electric', 'thunderbolt')
console.log(pokemon1.pokemonAttack());

const pokemon2 = new Pokemon('Charizard,', 'fire', 'overheat')
console.log(pokemon2.pokemonAttack());

const pokemon3 = new Pokemon('Rayquaza,', 'dragon', 'Hyper-Beam')
console.log(pokemon3.pokemonAttack());