/**
 * Return firstCharacter with the fastest character and secondCharacter with the slowest
 * @param {Character} characterOne - First Character to check the order
 * @param {Character} characterTwo - Second Character to check the order
 * @returns {object} firstCharacter: fastests, secondCharacter: slowest
 */
function getOrder(characterOne, characterTwo) {
	// Same speed
	if (characterOne.speed == characterTwo.speed) {
		return {
			firstCharacter: characterOne,
			secondCharacter: characterTwo,
		};
	}

	//Different speed
	const firstCharacter =
		characterOne.speed > characterTwo.speed ? characterOne : characterTwo;
	const secondCharacter =
		characterOne.speed < characterTwo.speed ? characterOne : characterTwo;

	return {
		firstCharacter,
		secondCharacter,
	};
}

/**
 * Execute the turn
 * @param {Character} currentCharacter - Current character (attacker)
 * @param {Character} targetCharacter - Target character (defender)
 * @returns {string} turn log
 */
function turn(currentCharacter, targetCharacter) {
	return currentCharacter.attack(targetCharacter);
}

/**
 * Generate Summary logs of the battle
 * @param {objects} args - required arguments
 * @param {Character} args.winner - Winner character
 * @param {Character} args.characterOne - Character one
 * @param {Character} args.characterTwo - Character two
 * @returns {string} summary logs
 */
function summary({ winner, characterOne, characterTwo }) {
	let logs = "### RESUMEN ###\n\n";
	logs += `${winner.name} gana la batalla!\n`;
	logs += `${characterOne.name} falló ${characterOne.fails} veces su ataque\n`;
	logs += `${characterTwo.name} falló ${characterTwo.fails} veces su ataque\n`;
	return logs;
}

/**
 * Execute the batle. Return battle logs when any character win
 * @param {Character} args.characterOne - Character one
 * @param {Character} args.characterTwo - Character two
 * @returns {string} battle logs
 */
function battle(characterOne, characterTwo) {
	let logs = "### BATALLA ###\n\n";
	let turnN = 1;
	let winner = null;

	const { firstCharacter, secondCharacter } = getOrder(
		characterOne,
		characterTwo
	);

	while (true) {
		logs += `Turno ${turnN}\n`;

		logs += turn(firstCharacter, secondCharacter);

		// If all characters alives, continue with the next turn
		if (firstCharacter.isAlive() && secondCharacter.isAlive()) {
			logs += turn(secondCharacter, firstCharacter);
		}

		logs += `\n`;

		// If any characters died, set the winner, logs the summary and break this loop
		if (!firstCharacter.isAlive() || !secondCharacter.isAlive()) {
			winner = firstCharacter.isAlive() ? firstCharacter : secondCharacter;
			logs += summary({
				winner,
				characterOne,
				characterTwo,
			});
			break;
		}

		turnN++;
	}

	return logs;
}

module.exports = battle;
