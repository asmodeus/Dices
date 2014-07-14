/* @DevDeps */
var logger = require('logger').logger;

/* @struct */
var CharacterStruct = {
	tales : {

	},
	hooks : {

	},
	cliches : {

	},
	trivia : {
		sex : "",
		age : "",
		race : "",
		pointless_talent : ""	
	}
};

function Character (char_obj) {
	var check_obj;
	if (char_obj) {
		check_obj = new Object();
		for (var key in char_obj) {
			if ( typeof char_obj[key] === 'undefined' ) {
				check_obj[key] = CharacterStruct[key];
			} else if ( typeof char_obj[key] === 'object' && typeof CharacterStruct[key] === 'object' ) {
				check_obj[key] = char_obj[key];
			}
		}
	}

	// Private Vars
	var CHAR_SHEET = check_obj || CharacterStruct; 
	var STARTDICE = 10 + (Object.keys(CHAR_SHEET.tales).length || 0) + (Object.keys(CHAR_SHEET.hooks).length || 0);

	// Access to private vars
	this.getStartdice = function() {
		return STARTDICE;
	};

	this.getChar = function() {
		return CHAR_SHEET;
	};

}

Character.prototype.setCliche = function (clicheName, val) {
	this.getChar().cliches[clicheName] = (val <= 6 && val >= 0) ? val : 0;
};

Character.prototype.setTale = function (taleName, text) {
	this.getChar().tales[taleName] = String(text);
};

Character.prototype.setHook = function (hookName, text) {
	this.getChar().hooks[hookName] = String(text);
};

Character.prototype.setTrivia = function (trivName, text) {
	this.getChar().trivia[trivName] = String(text);
};

Character.prototype.incrementCliche = function (clicheName) {
	if ( this.getChar().cliches[clicheName] < 6 ) {
		this.getChar().cliches[clicheName]++;
	} else {
		return;
	}
};

Character.prototype.decrementCliche = function (clicheName) {
	if ( this.getChar().cliches[clicheName] > 0 ) {
		this.getChar().cliches[clicheName]--;
	} else {
		return;
	}
};

var ch1 = new Character({
	tales : {
		tale1 : "blabla",
		tale2 : "blabla",
		tale3 : "blabla"
	},
	hooks : {

	},
	cliches : {

	},
	trivia : {
		sex : "",
		age : "",
		race : "",
		pointless_talent : ""	
	}
});

ch1.setCliche("bajsa", -11);
ch1.incrementCliche("bajsa");
ch1.incrementCliche("bajsa");
ch1.incrementCliche("bajsa");
ch1.incrementCliche("bajsa");

logger(
	
	ch1.getChar()

)

