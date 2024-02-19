var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ['Makkah', 'Dubai', 'Nani ka Ghar', 'Turkey', 'Japan'];
// part 1 original order
console.log('Original order:', placesToVisit);
// part 2 alphabatic order i used the spread syntax here
console.log('Alphabetical order:', __spreadArray([], placesToVisit, true).sort());
// part 3 confiming still in its original form
console.log('Original order:', placesToVisit);
// part 4 reversing in alphabatic order
console.log('Reverse alphabetical order:', __spreadArray([], placesToVisit, true).sort().reverse());
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
