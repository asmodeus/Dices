var dice = new Dice(4);

var tests = 50000
var res = [];
for (var i = 0; i < tests; i++) {
	res.push(dice.roll());
};

var counter = { 1 : 0, 2 : 0, 3 : 0, 4 : 0 }
for (var i = 0; i < res.length; i++) {
	counter[res[i]]++;
}

logger(
	counter,
	"1: "+counter[1]/tests*100+"%",
	"2: "+counter[2]/tests*100+"%",
	"3: "+counter[3]/tests*100+"%",
	"4: "+counter[4]/tests*100+"%"
);
