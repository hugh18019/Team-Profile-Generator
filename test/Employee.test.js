const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Employee object with the 'name', 'id', 'email' properties set to the corresponding 'name', 'id', 'email' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Tom';
            const id = '1234';
            const email = 'Tom1234@gmail.com';

            // Act
            const employeeObj = new Employee(name, id, email);

            // Assert
            expect(employeeObj.name).toEqual(name);
            expect(employeeObj.id).toEqual(id);
            expect(employeeObj.email).toEqual(email);
        });

        // Exception test
        it("should threw an error if not provided the 'name', 'id', 'email' values", () => {
            // Arrange
            const cb1 = () => new Employee();
            const cb2 = () => new Employee('name');

            const err = new Error(
                "Expected parameters 'name', 'id', 'email' to be non empty strings"
            );

            // const err2 = new Error(
            //     "Expected parameters 'id', 'email' to be non empty strings"
            // )

            // Assert / Act
            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);

        });
    });
});