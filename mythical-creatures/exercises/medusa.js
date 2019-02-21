class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    victim.stoned = true;
    if (this.statues.length > 3) {
      victim = this.statues.shift()
      victim.stoned = false;
    }
  }
}

module.exports = Medusa;
