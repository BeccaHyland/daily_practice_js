class Hobbit {
  constructor(name, disposition='homebody') {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;

    if (this.name == 'Frodo') {
      this.hasRing = true;
    }
  }

  celebrateBirthday() {
    this.age += 1;
    if (this.age == 33) {
      this.adult = true;
    } else if (this.age == 101) {
      this.old = true;
    }
  }
}

module.exports = Hobbit;
