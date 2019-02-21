class Wizard {
  constructor(args) {
    this.name = args.name;
    this.bearded = args.bearded;
    this.isRested = true;
    this.castCounter = 0;

    if (args.bearded == undefined) {
      this.bearded = true;
    }
  }

  incantation(string) {
    return (string.toUpperCase());
  }

  cast() {
    if (this.castCounter < 3){
      this.castCounter += 1
      return "MAGIC BULLET"
    } else {
      this.isRested = false;
      return "I SHALL NOT CAST!"
    }
  }
}

module.exports = Wizard;
