class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eatCounter = 0;
  }

  eat() {
    if (this.eatCounter < 2) {
      this.eatCounter += 1;
    } else {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
