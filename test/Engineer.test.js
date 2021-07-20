const Engineer = require('../lib/Engineer' );

describe('Engineer', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Employee object with the 'name', 'id', 'email', 'GitHub' properties set to the corresponding 'name', 'id', 'email', 'GitHub' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Bob';
            const id = '13';
            const email = 'Bob13@gmail.com';
            const GitHub = 'Bob13';

            // Act
            const engineerObj = new Engineer(name, id, email, GitHub);

            // Assert
            expect(engineerObj.name).toEqual(name);
            expect(engineerObj.id).toEqual(id);
            expect(engineerObj.email).toEqual(email);
            expect(engineerObj.GitHub).toEqual(GitHub);

        });
        
        // Exception test
        it("should threw an error if not provided the 'name', 'id', 'email' values", () => {
                    // Arrange
            const cb1 = () => new Engineer();
            const cb2 = () => new Engineer('name');
        
            const err = new Error(
            "Expected parameters 'name', 'id', 'email', 'github' to be non empty strings"
            );
        
            // Assert / Act
            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
        
        });
    });
});
