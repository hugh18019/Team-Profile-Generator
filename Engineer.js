var Employee = require( 'Employee.js' );

class Engineer extends Employee {
    constructor( github ) {
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}