const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
let Employee = require( './lib/Employee' );
let Manager = require( './lib/Manager' );
let Engineer = require( './lib/Engineer' );
let Intern = require( './lib/Intern' );
var generateHTMLFn = require( './src/generateHTML' );
const { exit } = require('process');


// Using the inquirer package to prompt the user to add a new manager and enter the appropriate information
// The entered information is pushed onto the membersArr.
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
                 name: 'GitHub_username',
                 message: "Enter the engineer's GitHub username",
                 inputType: 'input'
             }
         ] )
         .then ( (answer) => {
             resolve( answer );
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
                name: 'school',
                message: "Enter the intern's school",
                inputType: 'input'
            }
        ] )
        .then ( ( answer ) => {
            resolve( answer );
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
    const answer = await promptForManager();
    storeManagerInfo(answer);
    var done = false;
    while( !done ) {
        const answer = await promptForMoreMember();

        if( answer.newMemberType == 'engineer' ) {
            const answer = await promptForEngineer();
            storeEngineerInfo(answer);
        }
        else if( answer.newMemberType == 'intern' ) {
            const answer = await promptForIntern();
            storeInternInfo(answer);
        }
        else {
            done = true;
        }
    
    }
    writeToFile();    
}


function storeManagerInfo ( answer ) {
    const { name, employee_id, email_address, office_number } = answer;
    var managerObj = new Manager( name, employee_id, email_address, office_number );
    membersArr.push( managerObj );
}

function storeEngineerInfo ( answer ) {
    const { name, employee_id, email_address, GitHub_username } = answer;
    var engineerObj = new Engineer( name, employee_id, email_address, GitHub_username );
    membersArr.push( engineerObj );
}

function storeInternInfo ( answer ) {
    const { name, employee_id, email_address, school } = answer;
    var internObj = new Intern( name, employee_id, email_address, school );
    membersArr.push( internObj );
}



function clearFile() {
    fs.writeFile('./dist/index.html', '', function(){} );
}


function writeToFile() {

    clearFile();
    var HTMLData = generateHTMLFn( membersArr );
    console.log( HTMLData );

    fs.writeFile( "./dist/index.html", `${HTMLData}`, err => {
        if( err ) {
            console.error( err );
            return;
        }
    })
}


init();



