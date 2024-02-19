// creating a functing and using spread item giving it permission to collect all the diff arguments (all 3 of them)
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('a summary of how i like my sandwich');
    //created a loop here with for and of method
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
}
// some diffent combos for sandwich
order_sandwich('Bread', 'Cheese', 'Chiken');
order_sandwich('Bread', 'Egg', "ketchup");
order_sandwich('Bread', 'Tomato', 'cucumber', 'Mayo');
//ps neeed to practicee spreadddd 
