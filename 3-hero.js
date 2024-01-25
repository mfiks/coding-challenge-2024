// Coding challenge 2024
// 3/365
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// soal
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)

// cara 1
// function hero(bullets, dragons){
//     if ( dragons * 2 <= bullets ){
//         return true;
//     } else {
//         return false;
//     };
// };

// cara 2
function hero(bullets, dragons){
    return (bullets / 2 >= dragons) ? true : false
}

// cara 3
// function hero(bullets, dragons){
//     return bullets / 2 >= dragons
// }

console.log(hero(10, 5))