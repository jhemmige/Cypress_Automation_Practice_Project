//a function passed into another function as an argument is called callback function




let func= function(num1, num2, typeOfOperation){

if ((typeOfOperation).toLowerCase()==="add"){

return num1+num2


}
else if ((typeOfOperation).toLowerCase()==="sub"){


    return num1-num2
}
else ((typeOfOperation).toLowerCase()==="mul")

{


    return num1*num2
}


}

console.log(func(3,2,"MUL"))




let add= function(num1, num2 ){

return num1+num2

}


let sub= function(num1, num2 ){

    return num1-num2
    
    }

    let multiply= function (num1, num2){

        return num1*num2

    }

    let calculation=function(num1,num2, operate){


        return operate(num1,num2)

    }

   console.log(calculation(10,2,multiply))