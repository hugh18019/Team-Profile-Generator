const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
let Manager = require( './Manager' );
let Employee = require( './Employee' );
let Engineer = require( './Engineer' );
let Intern = require( './Intern' );

function promptForManager() {
    inquirer.prompt ( [
    {
        name: 'name',
        message: "Enter the manager's name",
        inputType: 'input'
    },
    {
        name: 'employee_id',
        message: "Enter the manager's employee ID",
        inputType: 'input'
    },
    {
        name: 'email_address',
        message: "Enter the manager's email address",
        inputType: 'input'
    },
    {
        name: 'office_number',
        message: "Enter the manager's office number",
        inputType: 'input'
    },
    ] )
    .then ( (answer) => {
        console.log( answer );
        const { name, employee_id, email_address, office_number } = answer;
        // var managerObj = Manager( answer)
        var managerObj = new Manager( name, employee_id, email_address, office_number );
        console.log( managerObj );
    })
}


function promptForMoreMember() {
    inquirer.prompt ([
        {
            name: 'newMemberType',
            message: 'Choose the type of new member do you want to add, or "none" to finish building your team.',
            inputType: 'list',
            choices: [ 'Engineer', 'Intern', 'none'],
            default: 'none'
        }
    ])
    .then ( (answer) => {
        console.log( answer );
        // { newMemberType: 'Engineer' }
    })
}


function promptForEngineer() {

}