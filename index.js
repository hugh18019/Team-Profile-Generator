const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
let Manager = require( './Manager' );
let Employee = require( './Employee' );
let Engineer = require( './Engineer' );
let Intern = require( './Intern' );
var generateHTMLFn = require( './generateHTML' );
const { exit } = require('process');

function promptForManager() {
    return new Promise( (resolve, reject) => {
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
            const { name, employee_id, email_address, office_number } = answer;
            var managerObj = new Manager( name, employee_id, email_address, office_number );
            membersArr.push( managerObj );
            resolve( answer );
        })
    })
    
}




function promptForEngineer() {
    return new Promise( (resolve, reject) => {
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
             const { name, employee_id, email_address, office_number, GitHub_username } = answer;
             var engineerObj = new Engineer( name, employee_id, email_address, office_number, GitHub_username );
             membersArr.push( engineerObj );
             resolve( 'engineer' );
         })
    }) 
 }



function promptForIntern () {
    return new Promise( (resolve, reject ) => {
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
            membersArr.push( internObj );
            resolve( 'intern' );
        })
    })
    
}


function promptForMoreMember() {
    return new Promise( (resolve, reject) => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'newMemberType',
                message: 'Choose the type of the new member or none to finish building the team?',
                choices: ['engineer', 'intern', 'none'],
            }
        ])
        .then( (answer) => {
            resolve( answer );
        })
    })
}




var membersArr = [];


async function init() {
    await promptForManager();

    var done = false;
    while( !done ) {
        const answer = await promptForMoreMember();
        // console.log( answer );
        if( answer.newMemberType == 'engineer' ) {
            await promptForEngineer();
        }
        else if( answer.newMemberType == 'intern' ) {
            await promptForIntern();
        }
        else {
            done = true;
        }
    
    }
    // console.log( membersArr );
    writeToFile();
    
}



function clearFile() {
    fs.write('./temp.html', '', function(){} );
}


function writeToFile() {

    clearFile();
    var HTMLData = generateHTMLFn( membersArr );
    console.log( HTMLData );

    fs.writeFile( "./temp.html", `${HTMLData}`, err => {
        if( err ) {
            console.error( err );
            return;
        }
    })
}


init();



