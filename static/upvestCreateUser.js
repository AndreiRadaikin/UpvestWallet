const { UpvestTenancyAPI } = require('@upvest/tenancy-api');

function createUser(username, password) {
//TODO: move credentials to properties(Radaikin);
    const tenancy = new UpvestTenancyAPI(
        'https://api-playground.eu.upvest.co/1.0/',
        'Jn4Bo3zevF2QdFKjxygE6w',                         //API key
        'OJKt9DfZiHRfsYnGv5MDs909BtlHhxnfnVB3ylQdyQs',    //Shared secret
        'jQH30_u0gVyPPKdF0zJB5vGL7OOX3H6PD_TGFGatpvM'    //passphrase(get while create key)
    );

    try {
        const user = await tenancy.users.create(username, password);
        const recoveryKit = user.recoverykit;
        console.log(recoveryKit);
        return recoveryKit;
    } catch (err) {
        err.response.status === 409 && console.log("User with this name is already exists");
    }
}

module.exports.createUser = createUser;