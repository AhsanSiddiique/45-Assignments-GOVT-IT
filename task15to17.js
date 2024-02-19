// soo this is basically the guest list file where i add remove and invite guests
//Q15 New gues list and remocal of old guest
var oldguestlsit = ["Ahsan", "Hafeez", "Hamza", "Bilal"];
var guestremoved = 'Hafeez';
var newguest = "Ayesha";
oldguestlsit[oldguestlsit.indexOf(guestremoved)] = newguest;
console.log("Salam, ".concat(guestremoved, " cant make it to the party therefore he is removed form the the list."));
oldguestlsit.map(function (guest) { return console.log("Salam ".concat(guest, "! u are invited to the party")); });
//Q16 NEW TABLE
console.log('Good news! We found a bigger dinner table.');
// adding new gues amna at the start
oldguestlsit.unshift('Amna');
//add new guest hussain at the middle
oldguestlsit.splice(Math.ceil(oldguestlsit.length / 2), 0, 'Hussain');
//adding ali at the end of the array using append
oldguestlsit.push('ali');
// now it should add all 3 new gues in the start,middle,and end
oldguestlsit.map(function (guest) { return console.log("Dear ".concat(guest, ", You're invited to the party for dinner")); });
//Q17shrinking the guest list because of late delivery of table
// Message for inviting only two people
console.log('i just got a call the dinner table will not be arriving in time therefore we can only invite two guests.');
// removing guest one at a time using the pop method
while (oldguestlsit.length > 2) {
    var removedGuest = oldguestlsit.pop();
    console.log("Bad Newss ".concat(removedGuest, ", we can't invite you to the party."));
}
// confirming the invitaion of the remaing two peopless
oldguestlsit.map(function (guest) { return console.log("Salam, ".concat(guest, ", You two are still invited.")); });
// I GUess no One is Invited the Party is cancelled
oldguestlsit.length = 0;
//program to war gya
console.log('Current guest list:', oldguestlsit);
//or yhn hamra guest ko add krna remove krna or basically unka time waste krne ka session khtm huwa on to the next task! task 18!
