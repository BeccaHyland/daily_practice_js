class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    this.human = !this.human
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }

  eat(victim) {
    if (this.human == false) {
      victim.alive = false;
      this.human = true;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Werewolf;
