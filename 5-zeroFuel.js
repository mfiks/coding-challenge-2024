// Coding challenge 2024
// 5/365
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// soal (hampir sama seperti hari ke 3)
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


// cara 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (distanceToPump / mpg <= fuelLeft) ? true : false
// };

// atau
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft ? true : false;

// cara 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (fuelLeft * mpg >= distanceToPump) ? true : false;
// };

// atau 
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump ? true : false; 

// cara 3
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if ( mpg * fuelLeft >= distanceToPump){
        return true
    } else {
        return false
    }
};

console.log(zeroFuel(50, 25, 2)) // true
console.log(zeroFuel(100, 50, 1)) // false