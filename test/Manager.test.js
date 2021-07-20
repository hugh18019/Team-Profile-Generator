const Manager = require('../lib/Manager' );

describe('Manager', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Intern object with the 'name', 'id', 'email', 'office_number' properties set to the corresponding 'name', 'id', 'email','School' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Bob';
            const id = '13';
            const email = 'Bob13@gmail.com';
            const office_number = '13';

            // Act
            const managerObj = new Manager(name, id, email, office_number);

            // Assert
            expect(managerObj.name).toEqual(name);
            expect(managerObj.id).toEqual(id);
            expect(managerObj.email).toEqual(email);
            expect(managerObj.office_number).toEqual(office_number);
        });
        
        // Exception test
        it("should threw an error if not provided the 'name', 'id', 'email', 'office number' values", () => {
                    // Arrange
            const cb1 = () => new Manager();
            const cb2 = () => new Manager('name');
        
            const err = new Error(
            "Expected parameters 'name', 'id', 'email', 'office_number' to be non empty strings"
            );
        
            // Assert / Act
            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
        
        });
    });
});