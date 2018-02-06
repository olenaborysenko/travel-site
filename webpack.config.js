var path = require("path");

module.exports = {
	entry: "./app/assets/js/app.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/js"),
		filename: "app.js"
	}
}