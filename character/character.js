const { randomProbability } = require("../utils/random.utils.js");

/**
 * Return generic attack message
 * @param {Character} character - The attacking character object
 * @param {Attack} attackObject - Attack object
 * @returns {string}
 */
const attackMessage = (character, attackObject) =>
	`${character.name} ataca con ${attackObject.name}`;

/**
 * Check if the attack is success or fail (accuracy)
 * @param {Attack} attack - Attack object
 * @returns {boolean} true: attack | false: fail
 */
const attackSuccessful = (attack) => randomProbability(attack.accuracy);

/**
 * Character definition
 */
class Character {
	constructor({
		name,
		characterClass,
		health,
		speed,
		firstAttack,
		secondAttack,
	}) {
		this.name = name;
		this.characterClass = characterClass;
		this.health = health;
		this.speed = speed;
		this.firstAttack = firstAttack;
		this.secondAttack = secondAttack;
		this.fails = 0;
	}

	/**
	 * Check if the character is alive
	 * @returns {boolean}
	 */
	isAlive() {
		return this.health > 0;
	}

	/**
	 * The character try to attack (deals or not damage) to the target character. Return a string for log
	 * @param {Character} target - Target character
	 * @returns {string}
	 */
	attack(target) {
		const attack = this.selectAttack();
		if (!attackSuccessful(attack)) {
			return this.fail(target, attack);
		}
		target.health -= attack.damage;
		let message = `La vida de ${target.name} queda en ${target.health}`;
		if (!target.isAlive()) {
			message = `${target.name} no puede continuar`;
		}
		return `${attackMessage(this, attack)}... Da en el blanco!. ${message}\n`;
	}

	/**
	 * The current character fail the attack (no deals damage) to the target character. Return a string for log
	 * @param {Character} target - Target character
	 * @param {Attack} attackObject - Attack to use (and fail)
	 * @returns {string}
	 */
	fail(target, attackObject) {
		this.fails++;
		return `${attackMessage(this, attackObject)}... Falla!. La vida de ${
			target.name
		} se mantiene en ${target.health}\n`;
	}

	/**
	 * Select first or second attack randomly (50%)
	 * @returns {Attack}
	 */
	selectAttack() {
		const fiftyAndFifty = randomProbability(50);
		return fiftyAndFifty ? this.firstAttack : this.secondAttack;
	}

	/**
	 * Character to string
	 * @returns {string}
	 */
	toString = () =>
		`${this.name} | ${this.characterClass} | ${this.health} de visa`;
}

module.exports = Character;
