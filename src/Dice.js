/* @DevDeps */
var logger = require('logger').logger;

/* @Deps */

function Dice (sides) {
	sides = parseInt(sides);
	if ( isNaN(sides) || !(typeof sides === 'number') ) {
		throw "Dice sides could not be parsed. Returned: "+sides;
	}
	this.sides = sides;
}

Dice.prototype.roll = function() {
	return Math.ceil(Math.random()*this.sides);
};

Dice.prototype.rollHigherEq = function(higher_eq, nTimes) {
	return this.rollNTimes(nTimes) >= higher_eq
};

Dice.prototype.rollHigher = function(higher, nTimes) {
	return this.rollNTimes(nTimes) > higher
};

Dice.prototype.rollLower = function(lower, nTimes) {
	return this.rollNTimes(nTimes) < lower;
};

Dice.prototype.rollLowerEq = function(lower_eq, nTimes) {
	return this.rollNTimes(nTimes) <= lower_eq;
};

Dice.prototype.rollNTimes = function(n) {
	n = parseInt(n);
	if ( isNaN(n) || !(typeof n === 'number') ) {
		return this.roll();
	}

	var total = 0;
	for (var i = 0; i < n; i++) {
		total += this.roll();
	}
	
	return total;
};


var dice_5 = new Dice(5);


logger(

	dice_5.rollHigherEq(5, 2)

)
