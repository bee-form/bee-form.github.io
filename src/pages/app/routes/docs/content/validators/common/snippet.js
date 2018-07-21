const snippet = (content, name) => {
    const match = new RegExp(`([ \t]*).*?${name}.*?\r?\n([\\s\\S]+?)\r?\n.*?${name} end.*?`).exec(content);
    if (match == null) {
        return `[Error]: Can not find snippet ${name}`;
    }
    return match[2].replace(new RegExp(`^${match[1]}`, "gm"), "");
};

exports.snippet = snippet;