const fetcher = require("./api").fetcher;
const docApi = {
    getDoc(path) {
        const url = `/docs/${path.replace(/^\//, "").replace(/\/$/, "/index.md")}`;

        return fetcher.get(url);
    },
    getSampleCode(path, name) {
        return fetcher.get(`/docs${path}samples/${name}`);
    },
};

exports.docApi = docApi;