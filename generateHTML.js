

function generateHTML( membersArr ) {


    var infoSoFar = 
    `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="assets/css/">
            <title>Document</title>
        </head>
        <body>
            <div style="height: 100px;" class="container bg-danger text-white d-flex justify-content-center align-items-center">
                <div class="row h-25">
                    <div>
                        My Team
                    </div>
                </div>
            </div>
        
            <div class="cards-container d-flex justify-content-center align-items-center flex-row flex-wrap">
                <div class="row d-flex flex-row flex-wrap justify-content-center col-9 cards-row">
    `;

    for( let each of membersArr ) {
        var name = each.name;
        var email = each.email;
        var id = each.id;
        var role = each.getRole();
        var specialAttr = generateHTMLUtil( each );

        infoSoFar +=
        ` 
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${name} </h5>
                <h6 class="card-subtitle mb-2 text-muted"> ${role} </h6>
                <p class="card-text">ID: ${id} </p>
                <p class="card-text">
                    <span>Email: </span><a href="mailto:${email}"> ${email} </a> 
                </p>
                <p class="card-text"> ${specialAttr} </p>
            </div>
        </div>
        `
    }
    
    infoSoFar += 
    `
        </div>
    </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="Index.js"></script>
    </body>
    </html>
    `
    
    return infoSoFar;
}


function generateHTMLUtil( data ) {
    if( data.getRole() == 'Manager') {
        return `Office number: ${data.office_number} `;
    }
    if( data.getRole() == 'Engineer') {
        return `GitHub: ${data.GitHub} `;
    }
    if( data.getRole() == 'Intern' ) {
        return `School: ${data.school} `;
    }
}


module.exports = generateHTML;