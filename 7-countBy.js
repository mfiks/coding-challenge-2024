// Coding challenge 2024
// 7/365
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// soal
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).
// example
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// x adalah kelipatannya
// n adalah jumlah element yang akan dimasukan pada arraynya
// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++){
//         z.push(i * x)
//     }
//     return z;
// }

// function countBy(x, n) {
//     return [...Array(n)].map((el, i) => (i + 1) * x)
// }

const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x)

console.log(countBy(2,10))