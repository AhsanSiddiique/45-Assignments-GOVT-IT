//Q25 Alien color #1
let alien_color: string = 'green';

// thiss version passes the test PS:(i didnt used the {} brackets bcz there was only 1 stataement if i want to put more then 1 statement i should use {} brackets)
if (alien_color === 'green') 
console.log('Player earned 5 points!');

// this one is gonna fail because it the color is yellow not green (no output)
if (alien_color === 'yellow') 
console.log('Player earned 5 points!');

//Q26 Alien color #2
let alien_color_2: string = 'yellow';

// in this programe if block is gonna run
if (alien_color_2 === 'yellow') 
console.log('Player earned 5 points for shooting the alien.');

else console.log('Player earned 10 points.');

// and in this the else one is gonna run the color is green and in if command we have wrote red
if (alien_color_2 === 'red') 
console.log('Player earned 5 points for shooting the alien.');

else console.log('Player earned 10 points.');

//Q3 Alien color 3
let alien_color_3: string = 'red';

// here the clr is green so it falls in the if else chain
if (alien_color_3 === 'green') 
console.log('Player earned 5 points.');

// here the color is yellow so it continues the chain
else if (alien_color_3 === 'yellow') 
console.log('Player earned 10 points.');

// finally it finds that the color is red here so it executes the messege of 15 points.
else if (alien_color_3 === 'red') 
console.log('Player earned 15 points.');


