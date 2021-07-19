var Employee = require( './Employee' );

class Engineer extends Employee {
    constructor( name, employee_id, email_address, office_number, github  ) {
        super();
        this.name = name,
        this.id = employee_id,
        this.email = email_address,
        this.officeNumber = office_number,
        this.github = github
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports( Engineer );