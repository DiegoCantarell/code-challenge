//Server App
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"});
});
module.exports = app;
