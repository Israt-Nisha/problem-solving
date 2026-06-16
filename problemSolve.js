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

// isEven(10);

// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

function largest(a, b, c){
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

largest(3, 7, 5);

function largest(a, b, c) {
    let max = Math.max(a, b, c);
    console.log(max);
}

// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

function checkSign(n) {
    if (n > 0) {
        console.log('positive');
    } else if (n < 0) {
        console.log('negative');
    } else {
        console.log('zero');
    }      
}

checkSign(-5);
checkSign(0);
checkSign(10);