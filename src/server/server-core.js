const express = require("express");

const ServerCore = {
    start: async ({port}) => {
        const app = express();


        app.use(express.static(__dirname + "/public"));
        app.use(express.static(__dirname + "/../../dist"));
        app.use("/docs", express.static(__dirname + "/../pages/app/routes/docs/content"));

        app.get("/docs/*", (req, res) => res.sendFile(`${__dirname}/public/index.html`));

        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    }
};

exports.ServerCore = ServerCore;