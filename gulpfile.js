/*!
 * This file is part of website-defaults
 * Copyright (C) 2016-present eyeo GmbH
 *
 * website-defaults is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * website-defaults is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with website-defaults.  If not, see <http://www.gnu.org/licenses/>.
 */

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("scss", function ()
{
  return gulp.src("./scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./static/css/"));
});

gulp.task("watch", function ()
{
  gulp.watch("./scss/**/*.scss", ["scss"]);
});

gulp.task("default", ["scss", "watch"]);
