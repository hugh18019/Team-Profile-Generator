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
            choices: [ 'engineer', 'intern', 'none'],
            default: 'none'
        }
    ])
    .then ( (answer) => {
        console.log( answer );
        // { newMemberType: 'Engineer' }
    })
}


function promptForEngineer() {
    inquirer.prompt ( [
        {
            name: 'name',
            message: "Enter the engineer's name",
            inputType: 'input'
        },
        {
            name: 'employee_id',
            message: "Enter the engineer's employee ID",
            inputType: 'input'
        },
        {
            name: 'email_address',
            message: "Enter the engineer's email address",
            inputType: 'input'
        },
        {
            name: 'office_number',
            message: "Enter the engineer's office number",
            inputType: 'input'
        },
        {
            name: 'GitHub_username',
            message: "Enter the engineer's GitHub username",
            inputType: 'input'
        }
    ] )
    .then ( (answer) => {
        const { name, employee_id, email_address, office_number, github } = answer;
        var engineerObj = new Engineer( name, employee_id, email_address, office_number, github );
    })
}

function promptForIntern () {
    inquirer.prompt ( [
        {
            name: 'name',
            message: "Enter the intern's name",
            inputType: 'input'
        },
        {
            name: 'employee_id',
            message: "Enter the intern's employee ID",
            inputType: 'input'
        },
        {
            name: 'email_address',
            message: "Enter the intern's email address",
            inputType: 'input'
        },
        {
            name: 'office_number',
            message: "Enter the intern's office number",
            inputType: 'input'
        },
        {
            name: 'GitHub_username',
            message: "Enter the intern's GitHub username",
            inputType: 'input'
        },
        {
            name: 'school',
            message: "Enter the intern's school",
            inputType: 'input'
        }
    ] )
    .then ( ( answer ) => {
        const { name, employee_id, email_address, office_number, school } = answer;
        var internObj = new Intern( name, employee_id, email_address, office_number, school );
    })
}