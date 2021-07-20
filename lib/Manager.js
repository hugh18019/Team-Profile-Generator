var Employee = require( './Employee' );

class Manager extends Employee {
    constructor( name, employee_id, email_address, office_number  ) {
        super(name, employee_id, email_address);
        this.office_number = office_number
    }
    getRole() {
        return 'Manager';
    }
}


module.exports = Manager;