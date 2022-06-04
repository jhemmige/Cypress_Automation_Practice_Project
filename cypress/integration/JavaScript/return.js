//compiler stops execution at the return statement
//if the return statement is present above console.log. Then no result is returned. 


function square(n){

let squareRoot = n*n
console.log(squareRoot) // this returns 9 since the console.log statement is present before return. IF this
//statement is present after return, then nothing returned in result
return squareRoot


}

square(3)
