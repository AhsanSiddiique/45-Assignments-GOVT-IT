let usernames: string[] = ['admin', 'Madina', 'Amna', 'Shaheer', 'samad'];
//soo here we use the for of command where i set username to be excluded out from usernames
for (let username of usernames) 
//here i told if the unsername is admin print the messege specially for admin
if (username === 'admin') 
        console.log('Hello admin, would you like to see a status report?');
    else 
        console.log(`Hello ${username}, thank you for logging in again.`);
//the for is command is a loop which goes through the array one at a time and print the namee with the given requirement.