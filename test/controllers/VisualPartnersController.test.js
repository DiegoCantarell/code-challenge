const VisualPartnersController = require("./../../lib/controllers/VisualPartnersController.js");
describe("Test for VisualPartnersController",() => {
    test("#1 Test for getInfo()", ()  => {
        expect(VisualPartnersController.getInfo()).not.toBeUndefined()
        //The amount of students is 51
        expect(VisualPartnersController.getInfo().length).toBe(51)
    })
})
