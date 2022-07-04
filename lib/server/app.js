//Server App
const VisualPartnersController = require("./../../lib/controllers/VisualPartnersController");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"});
});
app.get("/students/information", (request,response) => {
    const studentsInfo = VisualPartnersController.getInfo();
    response.json(studentsInfo);
});
app.get("/students/email/haveCertification=true", (request,response) => {
    const studentsEmail = VisualPartnersController.getEmails();
    response.json({emails:studentsEmail});
});
app.get("/students/credits/approved", (request,response) => {
    const studentsCredits = VisualPartnersController.getStudentsCredits();
    response.json({emails:studentsCredits});
});
module.exports = app;
