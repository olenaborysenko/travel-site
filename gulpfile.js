var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested");

gulp.task("styles", function() {
	return gulp.src("./app/assets/css/style.css")
		.pipe(postcss([autoprefixer, cssvars, nested]))
		.pipe(gulp.dest("./app/temp/css"));
});

gulp.task("watch", function() {
	watch("./app/assets/css/**/*.css", function() {
		gulp.start("styles");
	});
});