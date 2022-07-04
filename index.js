const fs = require("fs");
const Reader = require("./lib/utils/Reader");
const visualpartners = Reader.readJsonFile("visualpartners.json");
const VisualPartnersService = require("./lib/services/VisualPartnersService");

//Get all Visual Partners Info
const allInfoVisualPartners = VisualPartnersService.getAllStudentsInfo(visualpartners);
console.log(allInfoVisualPartners);

//Get Student emails if they HAVE CERTIFICATION
const studentEmails = VisualPartnersService.getStudentEmails(visualpartners);
console.log(studentEmails);

//Get Students info if they have CREDITS > 500
const studentCredits = VisualPartnersService.studentCredits(visualpartners);
console.log(studentCredits );
