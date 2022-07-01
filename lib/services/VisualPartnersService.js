class VisualPartnersService{
    static getAllStudentsInfo(visualpartners){
        //const infoVisualPartners = visualpartners
        return visualpartners
    }
    //Get Student emails if they HAVE CERTIFICATION
    static getStudentEmails(visualpartners){
        const studentsHaveCertification = visualpartners.filter((student) => student.haveCertification == true);
        const studentEmails = studentsHaveCertification.map((student) => student.email);
        return studentEmails
    }

}
module.exports = VisualPartnersService
