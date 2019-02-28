const Pet = require('../lib/pet')
const Wand = require('../lib/wand')

class Wizard {
  constructor(name) {
    this.name = name;
    this.pets = [];
    this.wand = null;
  }

  get petsCount() {
    return this.pets.length;
  }
  petList() {
    var petsStringArray = [];
    var vowelRegex = '^[aeiou]'
    for (var i = 0; i < this.pets.length; i++) {
      if (this.pets[i].type.match(vowelRegex)) {
        petsStringArray.push(`${this.pets[i].name}, an ${this.pets[i].type}`);
      } else {
        petsStringArray.push(`${this.pets[i].name}, a ${this.pets[i].type}`);
      }
    }
    var joined = petsStringArray.join(", ");
    return joined += ".";
  }

  givePet(pet) {
    this.pets.push(pet);
  }

  giveWand(wand) {
    this.wand = wand;
  }

  castSpell(spell) {
    return this.wand.cast(spell);
  }
};

// const wizard = new Wizard('Hermione');
//
// const pet = new Pet('Crookshanks', 'cat');
// const pet2 = new Pet('Hedwig', 'owl');
//
// wizard.givePet(pet);
// wizard.givePet(pet2);
// wizard.petList();

module.exports = Wizard;
