class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCounter = 0;
  }

  shoot() {
    if (this.cranky == false && this.standing == true) {
      this.activityCounter += 1;
      this.activityChecker();
      return 'Twang!!!';
    } else {
      return 'NO!'
    }
  }

  run() {
    if (this.standing == true) {
      this.activityCounter +=1;
      this.activityChecker();
      return 'Clop clop clop clop!!!';
    } else {
      return "NO!"
    }
  }

  sleep() {
    this.cranky = false;
    return (this.standing ? "NO!" : "ZZZZ");
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.activityCounter < 3 && this.standing == true) {
      this.cranky = true;
    } else if (this.standing == true) {
      this.cranky = false;
    } else {
      return "Not while I'm laying down!"
    }
  }

  activityChecker() {
    if (this.activityCounter > 2) {
      this.cranky = true;
    }
  }
}

module.exports = Centaur;
