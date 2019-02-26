var Bag = require('../lib/bag');

class TrickOrTreater {
  constructor(costume) {
    this.dressedUpAs = costume.style;
    this.bag = new Bag().candies;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy){
    this.bag.push(candy.type);
    this.hasCandy = true;
    this.countCandies = this.bag.length;
  }

  eat() {
    this.bag.pop();
    this.countSetter();
  }

  countSetter(){
    this.countCandies = this.bag.length;
  }
}

module.exports = TrickOrTreater;
