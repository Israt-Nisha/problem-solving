function swap(a,b) {
    [a, b] = [b, a];
    return [a, b];
}

let result = swap(5, 10);
// console.log(result);

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

// largest(3, 7, 5);

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

// checkSign(-5);
// checkSign(0);
// checkSign(10);

// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// row for of or for in loop using

function titleCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// function titleCasev2(str) {
//     return str
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
// }

// console.log(titleCase("hello world"));

// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3

function countChar(str, char) {
    let count = 0;  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }   
    }
    return count;
}
// console.log(countChar("banana", "a"));

function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4,5]));

// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

// function flattenArray(arr) {
//   return arr.flat();
// }

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce((acc, current) => {
    return acc.concat(current);
  }, []);
}

console.log(flattenArray([1, [2, 3], [4, 5]]));  