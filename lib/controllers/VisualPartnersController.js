// CREATING THE CONTROLLER TO CONNECT THE FUNCTIONALITY WITH THE SERVER
const Reader = require("./../../lib/utils/Reader");
const VisualPartnersService = require("./../../lib/services/VisualPartnersService");

class VisualPartnersController{
    static getInfo(){
        const visualpartners = Reader.readJsonFile("visualpartners.json");
        return visualpartners;
    }
    static getEmails(){
        const visualpartners = Reader.readJsonFile("visualpartners.json");
        const visualpartnersEmail = VisualPartnersService.getStudentsEmail(visualpartners);
        return visualpartnersEmail;
    }
    static getStudentsCredits(){
        const visualpartners = Reader.readJsonFile("visualpartners.json");
        const studentsCredits = VisualPartnersService.studentCredits(visualpartners);
        return studentsCredits;
    }
}
module.exports =  VisualPartnersController;
