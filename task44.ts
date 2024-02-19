// creating a functing and using spread item giving it permission to collect all the diff arguments (all 3 of them)
function order_sandwich(...items: string[]): void 
{console.log('a summary of how i like my sandwich');
//created a loop here with for and of method
for (let item of items) 
    console.log(`- ${item}`);}

// some diffent combos for sandwich
order_sandwich('Bread', 'Cheese', 'Chiken');
order_sandwich('Bread', 'Egg', `ketchup`);
order_sandwich('Bread', 'Tomato', 'cucumber', 'Mayo');

//ps neeed to practicee spreadddd 
