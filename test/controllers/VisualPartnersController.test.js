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
    test("#3 Test for getStudentCredits()", ()  => {
        expect(VisualPartnersController.getStudentsCredits()).not.toBeUndefined()
        //The amount of students with credits greater than 500 is 27
        expect(VisualPartnersController.getStudentsCredits().length).toBe(27)
    })
})
