const fetcher = require("./api").fetcher;
const docApi = {
    getDoc(path) {
        return fetcher.get(`/docs/index.md`);
    },
};

exports.docApi = docApi;