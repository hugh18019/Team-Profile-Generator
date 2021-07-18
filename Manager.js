var Employee = require( 'Employee.js' );

class Manager extends Employee {
    constructor( officeNumber ) {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}