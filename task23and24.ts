let bike = 'honda';

// i am performing these test using inequality operator != and strict equality operator ===

// we can see that it check here if the bike is value is equal to honda which it is equal to meanss it is true ps: == is equality operater
console.log("Is bike == 'honda'? I predict True.");
console.log(bike == 'honda');  // True

// here it sees if the calue is equal which it isnt because the bike is honda means false
console.log("Is bike == 'unique'? I predict False.");
console.log(bike == 'unique');  // False

// here i checks if the calue of the bike unique is not equal as it isnt bcz the bike is honda its true
console.log("Is bike != 'superpower'? I predict True.");
console.log(bike != 'superpower');  // True

// in here it sees if the value is strictly similar which it isnnt because the HONDA is uppercased while it actually is lowecaseed honda
console.log("Is bike === 'HONDA'? I predict False.");
console.log(bike === 'HONDA');  // False

// vise versa the value is strictly similar here therefore it is true
console.log("Is bike === 'honda'? I predict True.");
console.log(bike === 'honda');  // False

// in here i used !== which means the programe will check if the honda is not strictly equal which it isnt beace the H of honda is uppercased thats why its true.
console.log("Is bike !== 'Honda'? I predict True.");
console.log(bike !== 'Honda');  // True

// in here i used the .lenght method as honda has 5 letters the statemnet is false
console.log("Is bike.length > 5? I predict False.");
console.log(bike.length > 6);  // False

// viseversa here the statment is true H O N D A cuz the letters are 5
console.log("Is bike.length <= 7? I predict True.");
console.log(bike.length > 5);  // True

// .include is used here bcz its gonna check if the word has those 3 letters in it wich it does (hon)da
console.log("Is car.includes('hon')? I predict True.");
console.log(bike.includes('hon'));  // True

// its as simple as it can get honda is return in lowercase the program checks if it is, means the statement is true and if i used .toUpprCase() it will be false bcz honda is lowe
console.log("Is car.toLowerCase() === 'honda'? I predict True.");
console.log(bike.toLowerCase() === 'honda');  // True
