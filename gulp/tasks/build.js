var gulp = require("gulp"),
del = require("del"),
imagemin = require("gulp-imagemin"),
usemin = require("gulp-usemin");

gulp.task("deleteDocsFolder", function() {
	return del("./docs");
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

gulp.task("usemin", ["deleteDocsFolder"], function() {
	return gulp.src("./app/index.html")
		.pipe(usemin())
		.pipe(gulp.dest("./docs"));
});

gulp.task("build", ["deleteDocsFolder", "optimizeImages", "usemin"]);