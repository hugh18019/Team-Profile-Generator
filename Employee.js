class Employee {
    constructor( name, id, email ) {
        if (typeof name !== 'string' || !name.trim().length
             || typeof id !== 'string' || !id.trim().length
             || typeof email !== 'string' || !email.trim().length) {
            throw new Error("Expected parameters 'name', 'id', 'email' to be non empty strings");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;