const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
let Employee = require( './lib/Employee' );
let Manager = require( './lib/Manager' );
let Engineer = require( './lib/Engineer' );
let Intern = require( './lib/Intern' );
var generateHTMLFn = require( './src/generateHTML' );
const { exit } = require('process');


// Using the inquirer package to prompt the user to add a new manager and enter the appropriate information
// The entered information is returned
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



// Using the inquirer package to prompt the user to add a new engineer and enter the appropriate information
// The entered information is returned
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


// Using the inquirer package to prompt the user to add a new intern and enter the appropriate information
// The entered information is returned
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

// Using the inquirer package to prompt the user to add a new employee of the desired type, or to finish adding team members
// The entered information is returned
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



// The array to hold all team member objects
// This array is later used to generate HTML data for each member
var membersArr = [];


// This function is the main control for adding new members.
// It first prompts the user to add a manager.
// It then uses a while loop to keep prompting to add new engineers and interns until the user chooses 'none'
// It then calls the writeToFile function to write the user input data to an html file
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

// Creates an object for a manager based on user input
// Pushes that object onto the membersArr
function storeManagerInfo ( answer ) {
    const { name, employee_id, email_address, office_number } = answer;
    var managerObj = new Manager( name, employee_id, email_address, office_number );
    membersArr.push( managerObj );
}

// Creates an object for an engineer based on user input
// Pushes that object onto the membersArr
function storeEngineerInfo ( answer ) {
    const { name, employee_id, email_address, GitHub_username } = answer;
    var engineerObj = new Engineer( name, employee_id, email_address, GitHub_username );
    membersArr.push( engineerObj );
}

// Creates an object for an intern based on user input
// Pushes that object onto the membersArr
function storeInternInfo ( answer ) {
    const { name, employee_id, email_address, school } = answer;
    var internObj = new Intern( name, employee_id, email_address, school );
    membersArr.push( internObj );
}


// Clears everything inside index.html before writing to it
function clearFile() {
    fs.writeFile('./dist/index.html', '', function(){} );
}

// Calls clearFile to clear out index.html
// Passes the membersArr to generateHTMLFn to generate code to be written to index.html
// Writes the generated HTML code to index.html
function writeToFile() {

    clearFile();
    var HTMLData = generateHTMLFn( membersArr );

    fs.writeFile( "./dist/index.html", `${HTMLData}`, err => {
        if( err ) {
            console.error( err );
            return;
        }
    })
}

// Calls the init function to start the application
init();



