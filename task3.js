//Q3.NameCases
var personName = "Ahsan Siddique";
//In Lowercase
console.log("lowercase:", personName.toLowerCase());
//In Uppercase
console.log("Uppercase:", personName.toUpperCase());
//In Titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
