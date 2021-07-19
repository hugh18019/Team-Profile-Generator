var Employee = require( './Employee' );

class Manager extends Employee {
    constructor( name, employee_id, email_address, office_number  ) {
        super();
        this.name = name,
        this.id = employee_id,
        this.email = email_address,
        this.officeNumber = office_number
    }
    getRole() {
        return 'Manager';
    }
}




module.exports = Manager;