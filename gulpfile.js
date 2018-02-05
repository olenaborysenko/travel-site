var gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
browserSync = require("browser-sync").create();

gulp.task("styles", function() {
	return gulp.src("./app/assets/css/style.css")
		.pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
		.pipe(gulp.dest("./app/temp/css"));
});

gulp.task("watch", function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch("./app/index.html", function() {
		browserSync.reload();
	});

	watch("./app/assets/css/**/*.css", function() {
		gulp.start("cssInject");
	});
});

gulp.task("cssInject", ["styles"], function() {
	return gulp.src("./app/temp/css/style.css")
		.pipe(browserSync.stream());
});