const Intern = require('../lib/Intern' );

describe('Intern', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an Intern object with the 'name', 'id', 'email', 'School' properties set to the corresponding 'name', 'id', 'email','School' arguments provided when called with the 'new' keyword", () => {
            // Arrange
            const name = 'Bob';
            const id = '13';
            const email = 'Bob13@gmail.com';
            const school = 'ASU';

            // Act
            const internrObj = new Intern(name, id, email, school);

            // Assert
            expect(internrObj.name).toEqual(name);
            expect(internrObj.id).toEqual(id);
            expect(internrObj.email).toEqual(email);
            expect(internrObj.school).toEqual(school);
        });
        
        // Exception test
        it("should threw an error if not provided the 'name', 'id', 'email' values", () => {
                    // Arrange
            const cb1 = () => new Intern();
            const cb2 = () => new Intern('name');
        
            const err = new Error(
            "Expected parameters 'name', 'id', 'email', 'school' to be non empty strings"
            );
        
            // Assert / Act
            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
        
        });
    });
});