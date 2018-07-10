require("jsx-node").install();
global.h = require("react").createElement;

const gulp = require("gulp");
const clean = require('gulp-clean');
const Exporting = require("./src/exporting/exporting.jsx").Exporting;
const spawn = require('child_process').spawn;

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
    stdio: "inherit",
    // stdio: "ignore"
}) {

    return new Promise((resolve, reject) => {
        let split = cmd.split(" ");

        const spawnOptions = !/^win/.test(process.platform) ? [split[0], split.slice(1), options] : ['cmd', ['/s', "/c", ...split], options];

        let p = spawn(...spawnOptions);
        p.on("close", (a, b) => {
            // console.log(a, b)
            resolve();
        });
    });
}

gulp.task("build:watch", () => {
    stylusCompiler.watch();

    cmd("webpack --watch --mode development");
});

gulp.task("build", () => {
    stylusCompiler.compile();

    return cmd("webpack --mode production");
});

gulp.task("dev", ["build:watch"], () => {
    const {ServerCore} = require("./src/server/server-core");
    ServerCore.start({
        port: 6633,
    });
});

gulp.task("clean-deploy", () => {
    return gulp.src(["../bee-form.github.io/*",
        "!../bee-form.github.io/.gitignore",
        "!../bee-form.github.io/.idea",
        "!../bee-form.github.io/.git",
    ], {read: false})
        .pipe(clean({force: true}));
});

const deployDir = __dirname + "/../bee-form.github.io";
async function doExport() {
    const copyOver = (src, target) => new Promise((resolve, reject) => {
        gulp.src(src).pipe(gulp.dest(target)).on("end", resolve);
    });

    await Promise.all([
        copyOver("./dist/**", deployDir),
        copyOver("./src/content/**", deployDir),
        copyOver("./src/server/public/assets/**", deployDir + "/assets"),
        copyOver(["./src/server/public/*.*", "!./src/server/public/index.html"], deployDir),
        Exporting.doExport(deployDir, "./src/server/public/index.html"),
    ]);
}

gulp.task("test-deploy", ["clean-deploy"], async () => {
    await doExport();

    cmd("http-server ../bee-form.github.io");

});

gulp.task("deploy", ["clean-deploy", "build"], async () => {
    await doExport();

    // await cmd("git commit -m deploy", {cwd: deployDir});
});

gulp.task("deploy-push", ["deploy"], async () => {
    await cmd("git add **", {cwd: deployDir});
    await cmd("git commit -m deploy", {cwd: deployDir});
    await cmd("git push origin master", {cwd: deployDir});
});
