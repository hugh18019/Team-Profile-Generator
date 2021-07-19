// var cardRowEl = $('.cards-row');

function generateHTML( data ) {

    var name = data.name;
    var id = data.id;
    var email = data.email;
    // var role = data.getRole();

    // var specialAttr = generateHTMLUtil( data );

    return ` 

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${name} </h5>
            <h6 class="card-subtitle mb-2 text-muted">  </h6>
            <p class="card-text">ID: </p>
            <p class="card-text">
                <a href="mailto:${email}"> ${email} </a> 
            </p>
            <p class="card-text"> office number: </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>

    `;
}


function generateHTMLUtil( data ) {
    if( data.getRole() == 'Manager') {
        return data.office_number;
    }
    if( data.getRole() == 'Engineer') {
        return data.GitHub_username;
    }
    if( data.getRole() == 'Intern' ) {
        return data.school;
    }
}


module.exports = generateHTML;