const { ESLint } = require("eslint");

const eslint = new ESLint();

module.exports = {
	"**/*.{js,jsx}": filenames => [
		`prettier --with-node-modules --write ${filenames.join(" ")}`,
		`eslint --no-ignore --max-warnings=0 --fix ${filenames
			.filter(file => !eslint.isPathIgnored(file))
			.map(f => `"${f}"`)
			.join(" ")}`,
	],
	"**/*.{json,md,css,html,scss}": filenames => [`prettier --with-node-modules --write ${filenames.join(" ")}`],
};
