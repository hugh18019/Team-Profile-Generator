var Employee = require( './Employee' );

class Engineer extends Employee {
    constructor( name, employee_id, email_address, github  ) {
        super(name, employee_id, email_address);
        this.GitHub = github
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer ;