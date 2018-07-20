const Path = require("path");
const fs = require("fs");

function install() {
    const oldRequire = module.constructor.prototype.require;

    module.constructor.prototype.require = function(path) {
        if (path.startsWith("!raw-loader!")) {
            return fs.readFileSync(
                Path.resolve(Path.dirname(this.filename), path.substring("!raw-loader!".length)),
                "utf8"
            );
        } else {
            return oldRequire.apply(this, [path]);
        }
    };
}

exports.install = install;