var Employee = require( './Employee' );

class Manager extends Employee {
    constructor( name, id, email, office_number  ) {
        if (typeof name !== 'string' || !name.trim().length
            || typeof id !== 'string' || !id.trim().length
            || typeof email !== 'string' || !email.trim().length
            || typeof office_number !== 'string' || !office_number.trim().length) {
            throw new Error("Expected parameters 'name', 'id', 'email', 'office_number' to be non empty strings");
    }
        super(name, id, email);
        this.office_number = office_number
    }
    getRole() {
        return 'Manager';
    }
}


module.exports = Manager;