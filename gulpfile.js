var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// Static server
gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("serve", ["browser-sync"], function() {
  gulp.watch("*.html", browserSync.reload);
  gulp.watch("js/*.js", browserSync.reload);
  gulp.watch("CSS/*.css", browserSync.reload);
});
