const fetcher = require("./api").fetcher;
const docApi = {
    getDoc(path) {
        return fetcher.get(`/docs/${path
            .replace(/^\//, "")
            .replace(/\/$/, "/index.md")
        }`);
    },
    getSampleCode(path, name) {
        return fetcher.get(`/docs${path}samples/${name}`);
    },
};

exports.docApi = docApi;