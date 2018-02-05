var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import");

gulp.task("styles", function() {
	return gulp.src("./app/assets/css/style.css")
		.pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
		.pipe(gulp.dest("./app/temp/css"));
});

gulp.task("watch", function() {
	watch("./app/assets/css/**/*.css", function() {
		gulp.start("styles");
	});
});