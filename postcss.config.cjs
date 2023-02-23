const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');

const config = {
	plugins: [
		nested,
		autoprefixer,
	],
};

module.exports = config;
