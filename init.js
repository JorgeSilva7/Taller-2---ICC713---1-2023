const Character = require("./character/character.js");
const Utils = require("./utils/random.utils.js");
const CharacterClasses = require("./character/classes.js");
const {
	magicalAttacks,
	phyhsicalAttacks,
	AttacksTypes,
} = require("./character/attacks.js");

/**
 * Check if the current character is MAGICAL type or not
 * @param {CharacterClass} characterClass
 * @returns {boolean}
 */
const checkCharacterClassAttackType = (characterClass) =>
	characterClass.attackType === AttacksTypes.MAGICAL;

/**
 * Get a random attack from the array
 * @param {Attack[]} arrayAttacks - Array of attacks
 * @returns {Attack} random attack
 */
const generateAttack = (arrayAttacks) =>
	arrayAttacks[Utils.randomNumberBetween(0, arrayAttacks.length)];

/**
 * Generate character with random health, speed, class, attacks
 * @param {string} name - Name of the generated character
 * @returns {Character} generated character
 */
function generateCharacter(name) {
	const health = Utils.randomNumberBetween(200, 1000);
	const speed = Utils.randomNumberBetween(1, 10);
	const characterClass =
		CharacterClasses[Utils.randomNumberBetween(0, CharacterClasses.length)];
	const arrayAttacks = checkCharacterClassAttackType(characterClass)
		? magicalAttacks
		: phyhsicalAttacks;

	const firstAttack = generateAttack(arrayAttacks);
	const secondAttack = generateAttack(arrayAttacks);

	const character = new Character({
		name,
		characterClass,
		health,
		speed,
		firstAttack,
		secondAttack,
	});

	return character;
}

/**
 *
 * @param {string} characterOneName - Name of the first character
 * @param {string} characterTwoName - Name of the second character
 * @returns {object} character1: generated character 1, character2: generated character 2, logs: init logs
 */
function initBattle(characterOneName, characterTwoName) {
	const character1 = generateCharacter(characterOneName);
	const character2 = generateCharacter(characterTwoName);

	let logs = "### INICIO ###\n\n";
	logs += `${character1.toString()} vs ${character2.toString()}\n`;
	logs += `\n`;

	return {
		character1,
		character2,
		logs,
	};
}

module.exports = initBattle;
