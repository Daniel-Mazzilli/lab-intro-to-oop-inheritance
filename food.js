// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }
  prepare() {
    console.log(`${this.name} is being prepared`);
  }
  isFresh() {
    this.fresh === true && this.daysToSpoil > 0
      ? console.log(
          `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
        )
      : console.log(`${this.name} has spoiled.`);
  }
  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh()
  }
}

const pizza = new Food("pizza", 2, true)

pizza.prepare()
pizza.isFresh()
pizza.aDayPasses()
pizza.aDayPasses()

// Do not edit below this line
module.exports = Food;
