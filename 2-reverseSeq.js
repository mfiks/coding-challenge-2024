// Coding challenge 2024
// 2/365
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// soal 
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

// cara 1
const reverseSeq = n => {
    const arr = [];
    for (let i = n; i >= 1 ; i--){
        arr.push(i)
    }    
    return arr;
}

// cara 2
// const reverseSeq = n => [...Array(n)].map((el, i) => i + 1).reverse()

// cara 3
// const reverseSeq = n => [...Array(n)].map((el, i) => n - i )

console.log(reverseSeq(5))
