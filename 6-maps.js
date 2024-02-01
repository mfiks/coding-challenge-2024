// function maps(x){
//     return x.map( el => el * 2)
// }

function maps(x) {
    const arr = []
    for ( let i = 0; i < x.length; i++){
        arr.push( x[i] * 2)
    }
    return arr
}



console.log(maps([1, 2, 3]))