const Employee = require( './Employee' );

class Intern extends Employee {
    constructor( name, employee_id, email_address, school  ) {
        super(name, employee_id, email_address);
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