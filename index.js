const battle = require("./battle.js");
const generateFileLog = require("./utils/generate-file-log.utils.js");
const initBattle = require("./init.js");

// Two names
const nameOne = "Maki";
const nameTwo = "Gatoshi";

/**
 * Start the game!
 * First: Generate characters and logs the init battle
 * Second: Start the battle
 * Third: Generate file with the logs
 */
function startGame() {
	let allLogs = "";
	const {
		character1,
		character2,
		logs: initLogs,
	} = initBattle({ characterOneName: nameOne, characterTwoName: nameTwo });

	const battleLogs = battle(character1, character2);

	allLogs += initLogs;
	allLogs += battleLogs;
	generateFileLog(allLogs, "log_batalla.txt");
}

// start
startGame();
