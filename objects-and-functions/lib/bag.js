class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  push(candy) {
    this.candies.push(candy);
    this.count += 1;
  }

  contains(type) {
    var booleans = [];
    for (var i = 0; i < this.candies.length; i++){
      booleans.push(candy.type == type)
    }
    return booleans.includes(true);
  }
}

module.exports = Bag;
