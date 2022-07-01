// CREATING THE CONTROLLER TO CONNECT THE FUNCTIONALITY WITH THE SERVER
const Reader = require("./../../lib/utils/Reader");
const VisualPartnersService = require("./../../lib/services/VisualPartnersService");

class VisualPartnersController{
static getInfo(){
const visualpartners = Reader.readJsonFile("visualpartners.json");
return visualpartners
}
}
module.exports =  VisualPartnersController
