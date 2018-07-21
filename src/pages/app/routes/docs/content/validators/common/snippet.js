const snippet = (content, name) => {
    return new RegExp(`^.*${name}\r?\n([\\s\\S]+?)\r?\n.+?${name} end`).exec(content)[1];
};

exports.snippet = snippet;