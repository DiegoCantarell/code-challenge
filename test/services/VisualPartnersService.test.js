const VisualPartnersService = require("./../../lib/services/VisualPartnersService.js");

describe("Test for Services -> VisualPartnersService class", () => {

    const visualpartners =    [
        {
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": true
        },
        {
            "id": "6264d5d8cda17de0d2e9f236",
            "name": "Fuentes",
            "email": "Sharlene@visualpartnership.xyz",
            "credits": 210,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 10,
            "haveCertification": false
        }
    ];

    test("#1 Test for getAllStudentsInfo ", () => {
        expect(VisualPartnersService.getAllStudentsInfo(visualpartners)).not.toBeUndefined();
        expect(VisualPartnersService.getAllStudentsInfo(visualpartners).length).toBe(3);
    });
    test("#2 Test for getStudentsEmail ", () => {
        expect(VisualPartnersService.getStudentsEmail(visualpartners)).not.toBeUndefined();
        expect(VisualPartnersService.getStudentsEmail(visualpartners).length).toBe(2);
    });
    test("#3 Test for studentCredits ", () => {
        expect(VisualPartnersService.studentCredits(visualpartners)).not.toBeUndefined();
        expect(VisualPartnersService.studentCredits(visualpartners).length).toBe(2);
    });
});
