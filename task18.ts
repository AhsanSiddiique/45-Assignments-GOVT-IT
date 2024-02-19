let placesToVisit : string [] = ['Makkah', 'Dubai', 'Nani ka Ghar', 'Turkey', 'Japan'];

// part 1 original order
console.log('Original order:', placesToVisit);

// part 2 alphabatic order i used the spread syntax here
console.log('Alphabetical order:', [...placesToVisit].sort());

// part 3 confiming still in its original form
console.log('Original order:', placesToVisit);

// part 4 reversing in alphabatic order
console.log('Reverse alphabetical order:', [...placesToVisit].sort().reverse());

// part 5 confriming original form
console.log('Original order:', placesToVisit);

// part 6 reversing but not in alphabatic
placesToVisit.reverse();
console.log('Reversed order:', placesToVisit);

// part 7 reversing it so it goes back to its original form
placesToVisit.reverse();
console.log('Original order:', placesToVisit);

// part 8 sorting in alphabatic order
placesToVisit.sort();
console.log('Sorted order:', placesToVisit);

// part 9 using both sort and change method callsss to alphabatically reverse the list
placesToVisit.sort().reverse();
console.log('Reverse sorted order:', placesToVisit);


