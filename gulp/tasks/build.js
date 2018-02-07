var gulp = require("gulp"),
del = require("del"),
imagemin = require("gulp-imagemin"),
usemin = require("gulp-usemin"),
rev = require("gulp-rev"),
cssNano = require("gulp-cssnano"),
uglify = require("gulp-uglify"),
browserSync = require("browser-sync").create();

gulp.task("previewDist", function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

gulp.task("deleteDocsFolder", function() {
	return del("./docs");
});

gulp.task("copyGeneralFiles", ["deleteDocsFolder"], function() {
	var pathsToCopy = [
		"./app/**/*", 
		"!./app/index.html",
		"!./app/assets/img/**",
		"!./app/assets/css/**",
		"!./app/assets/js/**",
		"!./app/temp",
		"!./app/temp/**"
	]
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});

gulp.task("optimizeImages", ["deleteDocsFolder"], function() {
	return gulp.src("./app/assets/img/**/*")
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/img"));
});

gulp.task("usemin", ["deleteDocsFolder", "styles", "scripts"], function() {
	return gulp.src("./app/index.html")
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssNano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest("./docs"));
});

gulp.task("build", ["deleteDocsFolder", "copyGeneralFiles", "optimizeImages", "usemin"]);