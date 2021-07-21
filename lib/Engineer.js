var Employee = require( './Employee' );

class Engineer extends Employee {
    constructor( name, id, email, github  ) {
        // if (typeof name !== 'string' || !name.trim().length
        //      || typeof id !== 'string' || !id.trim().length
        //      || typeof email !== 'string' || !email.trim().length
        //      || typeof github !== 'string' || !github.trim().length) {
        //     throw new Error("Expected parameters 'name', 'id', 'email', 'github' to be non empty strings");
        // }
        super(name, id, email);
        this.GitHub = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer ;