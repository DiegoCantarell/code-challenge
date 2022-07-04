class VisualPartnersService{
    static getAllStudentsInfo(visualpartners){
        //const infoVisualPartners = visualpartners
        return visualpartners;
    }
    //Get Student emails if they HAVE CERTIFICATION
    static getStudentsEmail(visualpartners){
        const studentsHaveCertification = visualpartners.filter((student) => student.haveCertification == true);
        const studentEmails = studentsHaveCertification.map((student) => student.email);
        return studentEmails;
    }
    //Get Students info if they have CREDITS > 500
    static studentCredits(visualpartners){
        const studentsHaveCredits = visualpartners.filter((student) => student.credits >= 500);
        return studentsHaveCredits;
    }

}
module.exports = VisualPartnersService;
