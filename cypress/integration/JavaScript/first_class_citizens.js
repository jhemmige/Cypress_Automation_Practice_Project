    //Javascript treats functions are first class citizens

//Ability to return a function from another function
//Ability to treat functions as values
//Ability to pass them as Arguments. 


//Ability to treat functions as values

var b = function data(){

console.log( "function passed as a value to a variable")


}

console.log(b())


//Ability to return a function from another function


function toReturn(){

   return  function newreturnFunction(){

                console.log( " This is from newReturn function")

    }
    newreturnFunction()
}

toReturn()()//This is from newReturn function

//or


var n= toReturn()

n() //This is from newReturn function






//Ability to pass them as Arguments. 
    ;function teacher(){
        const t= "Teacher";
        return t
    }
      
    function student(){
        return "Student";
    }
      
    function greet(user){
        console.log("Welcome",user());    
    }
      
    // Prints "Welcome Teacher"
    var message = greet(teacher);
      
    // Prints "Welcome Student" 
    var message = greet(student);