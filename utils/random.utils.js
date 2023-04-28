/**
 * Returns true or false depending on wheteher the random number is in probability
 * @param {Number} probability - Probability in integer (ej: 10, 5, 40, 50)
 * @returns {boolean}
 */
const randomProbability = (probability) => Math.random() < probability / 100;

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {Number} min - Min number
 * @param {Number} max - Max number
 * @returns {Number} Random number integer
 */
const randomNumberBetween = (min, max) =>
	Math.floor(Math.random() * (max - min) + min);

module.exports = {
	randomNumberBetween,
	randomProbability,
};
