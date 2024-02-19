var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//task 41 i have created an array that contains the megician name
var magicians = ['Ahsan', 'Madina', 'Amna'];
//simple as before aa for of loop is created which is gonna print each name one at a time 
function show_magicians(magicians) { for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
    var magician = magicians_1[_i];
    console.log(magician);
} }
show_magicians(magicians);
//task 42 so here i will give value so the value will be returned instead of being void the value is "the great" here
function make_great(magicians) { return magicians.map(function (magician) { return "the Great ".concat(magician); }); }
// so i create a string here greate magician and give it the value of make greate magician
var great_magicians = make_great(magicians);
// so with all the data from the function body above i get my final result where the greate is written before the name
show_magicians(great_magicians);
//task 43
// alright using the spread operator i have created a copy of the magicians names 
var original_magicians = __spreadArray([], magicians, true);
// now calling the make greate magician function on the created copy i can print the names without worrying about the original array
var great_magicians_copy = make_great(__spreadArray([], magicians, true));
//i hope this woorks its 3 in the morning i am loosing it
console.log('Original Magicians:');
show_magicians(original_magicians);
console.log('\nThe Great Magicians (copied with spread):');
show_magicians(great_magicians_copy);
