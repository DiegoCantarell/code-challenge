const VisualPartnersController = require("./../../lib/controllers/VisualPartnersController.js");
describe("Test for VisualPartnersController",() => {
    test("#1 Test for getInfo()", ()  => {
        expect(VisualPartnersController.getInfo()).not.toBeUndefined()
        //The amount of students is 51
        expect(VisualPartnersController.getInfo().length).toBe(51)
    })
    test("#2 Test for getEmails()", ()  => {
        expect(VisualPartnersController.getEmails()).not.toBeUndefined()
        //The amount of students with certification is 29
        expect(VisualPartnersController.getEmails().length).toBe(29)
    })
})
