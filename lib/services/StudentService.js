class StudentService {
    static getAllStudents(students) {
        return students;
    }

    static haveCertification(students) {
        return students.filter(student => student.haveCertification === true);
    }

    static haveCertificationEmail(students) {
        return this.haveCertification(students).filter(student => student.email);
    }

    static creditsGreaterThan500(students) {
        return students.filter(student => student.credits > 500);
    }
}

module.exports = StudentService;