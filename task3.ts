//Q3.NameCases
let personName: string = "Ahsan Siddique"

//In Lowercase
console.log("lowercase:", personName.toLowerCase());

//In Uppercase
console.log("Uppercase:", personName.toUpperCase());

//In Titlecase
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
