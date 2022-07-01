const fs = require("fs");
const Reader = require("./lib/utils/Reader");
const visualpartners = Reader.readJsonFile("visualpartners.json");
const VisualPartnersService = require("./lib/services/VisualPartnersService");

//Get all Visual Partners Info
const allInfoVisualPartners = VisualPartnersService.getAllStudentsInfo(visualpartners)
console.log(allInfoVisualPartners)


