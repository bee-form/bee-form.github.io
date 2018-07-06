const fetcher = require("./api").fetcher;
const docApi = {
    getDoc(path) {
        return fetcher.get(`/docs/${path
            .replace(/^\//, "")
            .replace(/\/$/, "/index.md")
        }`);
    },
};

exports.docApi = docApi;