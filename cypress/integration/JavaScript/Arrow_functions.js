//normal function expression
addition =function (a, b){
    return a+b 
}

console.log(addition(4,5))


//has 2 parameters
addition= (num1,num2)=>num1+num2

console.log("Has 2 parameters" + addition(4,5))

//has 1 parameter

addition = num1=>num1*10

console.log("Has 1parameter" + addition(5))

//has no parameter

addition =()=>5*10

console.log("Has NO parameters" + addition())

