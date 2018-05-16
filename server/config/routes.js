const mongoose = require("mongoose");
const tasks = require("../controllers/cakes");

module.exports = function (app) {
    app.get("/cakes", tasks.index);
    app.post("/cakes", tasks.new);
    app.get("/cakes/:id", tasks.show);
    app.post("/cakes/:id", tasks.rating);
}