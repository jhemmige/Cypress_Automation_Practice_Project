
let a = 10 
let b=a
 a=20
 console.log(a)
 console.log(b)

 /** For primitive datatype result of this code is 20 , 10. 
  * Reason being. the value of b doesnot change . a starts referencing to 20 . A is no long referencing to 10
  */


 //for non primitive datatype . for eg: object emp2 now assumes the new name
let emp1 ={
name:"John",
age:25


 }
 let emp2= emp1

 emp1.name="QA"

 console.log(emp1)
 console.log(emp2)

console.log("----------------------------")
let num=100
function increment(number){ 
    console.log(number++);
 }
increment(num)

console.log(num)

console.log("----------------------------")

let car={
name:"fiat"

}

function newCar(myobj){
myobj.name="BMW"

}

console.log(car.name)
newCar(car)
console.log(car.name)


/**
 Features of call by value:

Function arguments are always passed by value.
It copies the value of a variable passed in a function to a local variable.
Both these variables occupy separate locations in memory. 
Thus, if changes are made in a particular variable it does not affect the other one.

Features of By reference:

In JavaScript, all objects interact by reference.
If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory.
Changes in one object variable affect the other object variable.




** */

//non-primitive data-object

let ap={
    value: 100
}

let pa=ap

ap.value=200


console.log(ap)
console.log(pa)
