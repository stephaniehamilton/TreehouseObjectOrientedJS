function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll =  function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice.roll === dice10.roll);

/*First, the JS interpreter tries to call it on the object itself.
If it's not there, it will check it's prototype.
If the roll is there, it will call the method in the context of that instance.*/
