// Write a function that takes two param, say a and b, as arguments

// Return true if the two values are equal and of the same type

function myFunction(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(myFunction(2, 3));
console.log(myFunction(3, 3));
console.log(myFunction(1, '1'));
console.log(myFunction('10', '10'));

/// Q2

// Write a function that takes a string (letters) and a number (n) as argument
// Return the nth character of 'letters'

// "ahmad" , 2 => m
// "fawaz" , 3 => w

function takeChar(letters, n) {
  return letters[n - 1];
}

console.log(takeChar('abcd', 1));
console.log(takeChar('zyxbwpl', 5));
console.log(takeChar('gfedcba', 3));
