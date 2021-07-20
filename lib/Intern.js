const Employee = require( './Employee' );

class Intern extends Employee {
    constructor( name, id, email, school ) {
        if (typeof name !== 'string' || !name.trim().length
            || typeof id !== 'string' || !id.trim().length
            || typeof email !== 'string' || !email.trim().length
            || typeof school !== 'string' || !school.trim().length) {
            throw new Error("Expected parameters 'name', 'id', 'email', 'school' to be non empty strings");
        }
        super(name, id, email);
        this.school = school
    }
    getSchool() {
        return school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;