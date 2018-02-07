var path = require("path");

module.exports = {
	entry: {
		App: "./app/assets/js/app.js",
		Vendor: "./app/assets/js/vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/js"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}