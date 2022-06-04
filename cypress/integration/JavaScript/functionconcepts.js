//various ways to declare functions

//1
function add(num1, num2){

let sum= num1+ num2
console.log(sum)

}

add(1,2)
add(20,30)

console.log("*********************************************")

// 2 - using a variable name to the function

var channelName= function(){

console.log ("this is the channelName")

}
channelName()

console.log("*********************************************")

//3 anonymous function
var fullName= function(fname, lname){


console.log(fname+" "+ lname)

}

fullName("jayashree", "hemmige")


console.log("*********************************************")


//4 using fatarrow/fat pipe

var fullName= (fn, ln)=>{
console.log(fn + " " + ln)

}
//invoking the function
fullName("jaas","shree")


//or 


var fatArrow= (fn,ln)=>console.log(fn + " " + ln)

//invoking the function
fatArrow("using" +" " + "fat pipe operator")

console.log("*********************************************")




