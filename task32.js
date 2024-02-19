var current_users = ['Ahsan', 'Madina', 'Bilal', 'admin', 'Hamza'];
var new_users = ['Madina', 'ahsan', 'Shaheer', 'Hafiz', 'Saim'];
// so again i ahve used the for and of loop so the program can loop through all the names and determine if the username is used before or not
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // here we make sure that both new users and current user are change into lowercase so it wont make the ahsan in all small be available which it isnt as Ahsan is already a user.
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(new_user.toLowerCase()))
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please choose a different one."));
    else
        console.log("The username '".concat(new_user, "' is available."));
}
// its gonna say that user name madina and ahsan are not availabe while shaheer ahafiz and saim are.
