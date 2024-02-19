var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// using for and of we loop through 1 to 9 and in we have used === strictly equal method which means 1st is gonna be printed but the rest will be gone on a loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal = '';
    if (number === 1)
        ordinal = 'st';
    else if (number === 2)
        ordinal = 'nd';
    else if (number === 3)
        ordinal = 'rd';
    // here the if else if else chain will end as we have not used strictly euqal here
    else
        ordinal = 'th';
    console.log("".concat(number).concat(ordinal));
}
