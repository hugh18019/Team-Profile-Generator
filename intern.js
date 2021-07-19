const Employee = require( './Employee' );

class Intern extends Employee {
    constructor( name, employee_id, email_address, office_number, school  ) {
        super();
        this.name = name,
        this.id = employee_id,
        this.email = email_address,
        this.officeNumber = office_number,
        this.school = school
    }
    getSchool() {
        return school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports( 'Intern' );