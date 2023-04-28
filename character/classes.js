const { AttacksTypes } = require("./attacks.js");

/**
 * All character classes available
 */
const CharacterClasses = [
	{
		name: "MAGICIAN",
		attackType: AttacksTypes.MAGICAL,
	},
	{
		name: "KNIGHT",
		attackType: AttacksTypes.PHYSICAL,
	},
	{
		name: "WARRIOR",
		attackType: AttacksTypes.PHYSICAL,
	},
	{
		name: "FAIRY",
		attackType: AttacksTypes.MAGICAL,
	},
];

module.exports = CharacterClasses;
