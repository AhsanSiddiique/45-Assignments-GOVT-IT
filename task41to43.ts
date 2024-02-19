//task 41 i have created an array that contains the megician name
let magicians: string[] = ['Ahsan', 'Madina', 'Amna'];
//simple as before aa for of loop is created which is gonna print each name one at a time 
function show_magicians(magicians: string[]): void 
{for (let magician of magicians) {console.log(magician);}}

show_magicians(magicians);

//task 42 so here i will give value so the value will be returned instead of being void the value is "the great" here
function make_great(magicians: string[]): string[] 
{return magicians.map(magician => `the Great ${magician}`);}

// so i create a string here greate magician and give it the value of make greate magician
let great_magicians: string[] = make_great(magicians);

// so with all the data from the function body above i get my final result where the greate is written before the name
show_magicians(great_magicians);

//task 43
// alright using the spread operator i have created a copy of the magicians names 
let original_magicians: string[] = [...magicians];

// now calling the make greate magician function on the created copy i can print the names without worrying about the original array
let great_magicians_copy: string[] = make_great([...magicians]);

//i hope this woorks its 3 in the morning i am loosing it
console.log('Original Magicians:');
show_magicians(original_magicians);
console.log('\nThe Great Magicians (copied with spread):');
show_magicians(great_magicians_copy);

//yessss
