//Q15 New gues list and remocal of old guest
var oldguestlsit = ["Ahsan", "Hafeez", "Hamza", "Bilal"];
var guestremoved = 'Hafeez';
var newguest = "Ayesha";
oldguestlsit[oldguestlsit.indexOf(guestremoved)] = newguest;
console.log("Salam, ".concat(guestremoved, " u have been removed form the the list."));
oldguestlsit.map(function (guest) { return console.log("Salam ".concat(guest, "! u are invited to the party")); });
