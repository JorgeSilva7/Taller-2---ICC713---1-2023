const attacks = require("../utils/attacks.json");

// "Enum" of attacks types
const AttacksTypes = {
	MAGICAL: "MAGIC",
	PHYSICAL: "PHYSICAL",
};

/**
 * Filter the array of attacks and get only MAGICAL attacks
 */
const magicalAttacks = attacks.filter(
	(attack) => attack.type === AttacksTypes.MAGICAL
);

/**
 * Filter the array of attacks and get only PHYSICAL attacks
 */
const phyhsicalAttacks = attacks.filter(
	(attack) => attack.type === AttacksTypes.PHYSICAL
);

module.exports = { magicalAttacks, phyhsicalAttacks, AttacksTypes };
