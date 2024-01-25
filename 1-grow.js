// Coding challenge 2024
// 1/365
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// soal
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// cara 1
// function grow(x){
//     let result = x[0]
//     for ( let i = 1; i < x.length; i++) {
//         result = result * x[i]
//     }
//     return result;
// }

// cara 2
function grow(x) {
    const result = x.reduce((acc, curr) => acc * curr, 1);
    return result
}

console.log(grow([1, 2, 3]));
