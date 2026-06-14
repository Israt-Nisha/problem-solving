function swap(a,b) {
    [a, b] = [b, a];
    return [a, b];
}

let result = swap(5, 10);
console.log(result);

// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.


function isEven(n) {
  
    if (n % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
    
}

isEven(10);