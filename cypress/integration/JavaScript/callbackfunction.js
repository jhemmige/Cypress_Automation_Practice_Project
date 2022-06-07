//a function passed into another function as an argument is called callback function



//FIRST CLASS FUNCTION - ability of the function to be returned from a funtion, passed as a parameter or argument of a function 


// let func= function(num1, num2, typeOfOperation){

// if ((typeOfOperation).toLowerCase()==="add"){

// return num1+num2


// }
// else if ((typeOfOperation).toLowerCase()==="sub"){


//     return num1-num2
// }
// else ((typeOfOperation).toLowerCase()==="mul")

// {


//     return num1*num2
// }


// }

// console.log(func(3,2,"MUL"))




// let add= function(num1, num2 ){

// return num1+num2

// }


// let sub= function(num1, num2 ){

//     return num1-num2
    
//     }

//     let multiply= function (num1, num2){

//         return num1*num2

//     }

//     let calculation=function(num1,num2, operate){


//         return operate(num1,num2)

//     }

//    console.log(calculation(10,2,multiply))





   // call back function
   
   
 
  
   function calculate(num1, num2,New){

    New=()=>{console.log( (num1* num2))} 
    New()
       }

    calculate(10, 0.5)
  



    //    function b(param1){

    //     console.log(param1)

    //    }
       
    //    function xyz(){

    //     console.log("from xyz")

    //    }

    //   //b("this is from " + xyz())

    //   b()
   
    

   





      
    
      

       
   