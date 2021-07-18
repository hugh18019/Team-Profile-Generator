const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
let Manager = require( './Manager' );

function promptForManager() {
    inquirer.prompt ( [
    {
        name: 'manager',
        message: "Enter the manager's name, employee ID, email address, and office number",
        inputType: 'input'
    },
    ] )
    .then ( (answer) => {
        console.log( answer );
        // var managerObj = Manager( answer)
    })
}

promptForManager();

// function promptForMoreMember() {
//     inquirer.prompt ([
//         {
//             name: 'newMemberType',
//             message: 'Add a new member of the following type?',
//             inputType: ''
//         }
//     ])
// }