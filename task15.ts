//Q15 New gues list and remocal of old guest
let oldguestlsit = ["Ahsan", "Hafeez", "Hamza", "Bilal"]
let guestremoved = 'Hafeez'
let newguest = "Ayesha"
oldguestlsit[oldguestlsit.indexOf(guestremoved)] = newguest
console.log(`Salam, ${guestremoved} u have been removed form the the list.`);
oldguestlsit.map(guest => console.log(`Salam ${guest}! u are invited to the party`));




