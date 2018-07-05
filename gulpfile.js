require("jsx-node").install();
global.h = require("react").createElement;

var gulp = require("gulp");
const Exporting = require("./src/exporting/exporting.jsx").Exporting;
var spawn = require('child_process').spawn;

function createStylusCompiler() {
    return require("./src/build/stylus-compiler").createCompiler({
        container: {
            dir: `${__dirname}/src/pages/common/styl`,
            file: "style.styl",
        },
        lookupDirs: [
            `${__dirname}/src/pages`
        ],
        distDir: `${__dirname}/dist/css`,
    });
}

const stylusCompiler = createStylusCompiler();

function cmd(cmd, options = {
    stdio: "inherit"
    // stdio: "ignore"
}) {

    let split = cmd.split(" ");

    if (!/^win/.test(process.platform)) { // linux
        return spawn(split[0], split.slice(1), options);
    } else {
        return spawn('cmd', ['/s', "/c", ...split], options);
    }
}

gulp.task("build:watch", () => {
    stylusCompiler.watch();

    cmd("webpack --watch --mode development");
});

gulp.task("build", () => {
    stylusCompiler.compile();

    cmd("webpack --mode production");
});

gulp.task("dev", ["build:watch"], () => {
    const {ServerCore} = require("./src/server/server-core");
    ServerCore.start({
        port: 6633,
    });
});

gulp.task("test-deploy", async () => {


    gulp.src("./dist/**").pipe(gulp.dest("../pages-deploy"))
    gulp.src("./src/content/**").pipe(gulp.dest("../pages-deploy"))
    gulp.src("./src/server/public/assets/**").pipe(gulp.dest("../pages-deploy/assets"))
    cmd("http-server ../pages-deploy");

    await Exporting.doExport("../pages-deploy", "./src/server/public/index.html");
});
