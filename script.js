// String Manipulation Functions
// Reverse a String

function reverseString(s) {
    return s.split('').reverse().join('');
}

console.log(reverseString("hello"));  // Output: "olleh"

// Count Characters

function countCharacters(s) {
    return s.length;
}

console.log(countCharacters("hello"));  // Output: 5

// Capitalize Words

function capitalizeWords(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world"));  // Output: "Hello World"

// Array Functions

// Find Maximum and Minimum

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

console.log(findMaximum([1, 2, 3, 4, 5]));  // Output: 5
console.log(findMinimum([1, 2, 3, 4, 5]));  // Output: 1

// Sum of Array

function sumOfArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5]));  // Output: 15

// Filter Array

function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Filtering even numbers
console.log(filterArray([1, 2, 3, 4, 5], x => x % 2 === 0));  // Output: [2, 4]

// Mathematical Functions

// Factorial

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));  // Output: 120

// Prime Number Check

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));  // Output: true
console.log(isPrime(10));  // Output: false

// Fibonacci Sequence

function fibonacci(n) {
    let fibSequence = [];
    let a = 0, b = 1;
    while (fibSequence.length < n) {
        fibSequence.push(a);
        [a, b] = [b, a + b];
    }
    return fibSequence;
}

console.log(fibonacci(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

