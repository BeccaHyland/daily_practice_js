class Pirate {
  constructor(name, job = "Scallywag") {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.curseCounter = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.curseCounter += 1;
    if (this.curseCounter > 2) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty += 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;
