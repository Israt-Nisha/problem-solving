// No:1
function reverseString(s) {
  let reversed = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversed = reversed + s[i];
  }
  return reversed;
}

// No:2
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// No:3
function findLargest(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}


// No:4
function isPalindrome(s) {
  let reversed = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reversed = reversed + s[i];
  }
  if (s === reversed) {
    return true;
  } else {
    return false;
  }
}

// No:5
function sumofArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

// No:6
function countVowels(s) {
    let count = 0;
    for  (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            count++;
        }
    }
    return count;
}


// No:7
function factorial(n) {
    if (n === 0 || n ===1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;

}



// No:8
function evenNumbers(nums){
  let evens = [];
  for (let i = 0; i<nums.length; i++) {
    if (nums[i] % 2 === 0 ) {
      evens.push(nums[i]);
    }
  }
  return evens;
}


// No:9
function febonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let a = 0;
  let b = 1;
  let result;
  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;

}

// No:10
function findMin(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }  return min;
}




// No:11
function multiplicationTable(n) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${n} x ${i} = ${n * i}`);
  }
  return result;
}

// No:12
function isPrime(n) {
  if (n <= 1) return false; 
  if (n === 2) return true; 

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; 
    }
  }

  return true;
}


// No:13
function removeDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result;
}


// No:14
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// No:15
function countOccurrences(s, c) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }

  return count;
}

// function pagination(items, pageSize, pageNumber) {
//   const startIndex = (pageNumber - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   return items.slice(startIndex, endIndex);
// }





