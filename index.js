const iquirer = require( 'inquirer' );
const fs = require( 'fs' );


function promptForManager() {
    inquirer.prompt ( [
    {
        name: 'manager',
        message: "Enter the manager's name, employee ID, email address, and office number",
        inputType: 'input'
    },
    ] )
}

