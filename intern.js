const Employee = require( 'Employee.js' );

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {
        return school;
    }
    getRole() {
        return 'Intern';
    }
}