var favorite_fruits = ['banana', 'Mangoes', 'orange'];
// condition is met as with the help of .include it finds the mango in the array and prints
if (favorite_fruits.includes('Mangoes'))
    console.log('I really like Mangoes!');
//it wont print
if (favorite_fruits.includes('Watermelon'))
    console.log('I really like Watermelon!');
//this wont
if (favorite_fruits.includes('apple'))
    console.log('I really like apples!');
//this will print
if (favorite_fruits.includes('orange'))
    console.log('I really like oranges!');
//and this wont
if (favorite_fruits.includes('strawberry'))
    console.log('You really like strawberries!');
// two out of five will print.
