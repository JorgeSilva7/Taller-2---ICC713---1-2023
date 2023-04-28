const fs = require("fs");

/**
 * Generate and save the log file into the disc
 * @param {string} logs - All logs to be saved
 * @param {string} filename - Path or filename
 * @returns {void}
 */
function generateFileLog(logs, filename) {
	fs.writeFile(filename, logs, (err) => {
		if (err) throw err;
	});
}

module.exports = generateFileLog;
