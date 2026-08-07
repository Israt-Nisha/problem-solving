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

// console.log(flattenArray([1, [2, 3], [4, 5]]));  

function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

// console.log(chunkArray([1, 2, 3, 4, 5], 2));

// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3

function countProperties(obj) {
    let count = 0;
    for (let key in obj){
        count++;
    }
    return count;
}
 

// console.log(countProperties({a: 1, b: 2, c: 3, d: 4}));
// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}

function mergeObjects1(obj1, obj2) {
    return {...obj1, ...obj2};
}       

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// console.log(mergeObjects({a:1}, {b:2}));

// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
function invertObject(obj) {
    let inverted = {};  
    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}       

// console.log(invertObject({a: 1, b: 2})); // Output: {1: 'a', 2: 'b', 3: 'c'}
// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.

// function findDuplicateNames(arr) {
//   let count = {};
//   let duplicates = [];

//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i].name;

//     if (count[name]) {
//       count[name]++;
//     } else {
//       count[name] = 1;
//     }
//   }

//   for (let name in count) {
//     if (count[name] > 1) {
//       duplicates.push(name);
//     }
//   }

//   return duplicates;
// }

function findDuplicateNames(arr) {
  const count = arr.reduce((acc, obj) => {
    acc[obj.name] = (acc[obj.name] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(count).filter(name => count[name] > 1);
}
const users = [
  { name: "Ali" },
  { name: "Sara" },
  { name: "Ali" }
];

// console.log(findDuplicateNames(users)); 

// Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
// console.log(factorial(5)); 
// console.log(factorial(0)); 
// console.log(factorial(3)); 

// Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }

  return second;
}


// console.log(fibonacci(6)); 

// map() Higher Order Method

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function search(text) {
  console.log("Searching:", text);
}

const debouncedSearch = debounce(search, 300);

// debouncedSearch("H");
// debouncedSearch("He");
// debouncedSearch("Hel");
// debouncedSearch("Hello");


function makeCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },

    getCount: function () {
      return count;
    }
  };
}


// const c = makeCounter();

// c.increment();
// c.increment();

// console.log(c.getCount()); 

// c.decrement();

// console.log(c.getCount()); 

// Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5
// Hint: Return a function from inside a function.


function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}


const add = curry((a, b) => a + b);

// console.log(add(2)(3)); // 5


// function throttle(fn, limit) {

//     let lastCall = 0;

//     return function (...args) {

//         const now = Date.now();

//         if (now - lastCall >= limit) {

//             lastCall = now;

//             fn(...args);

//         }

//     };

// }

// const throttledSearch = throttle(search, 1000);
// console.log(throttledSearch("H"));