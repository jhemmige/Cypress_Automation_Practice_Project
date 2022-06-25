
//1. Hoisting : 



//mechanism in which Javascript pushes variables or function declarations to the top of the scope before code execution
console.log(y)

var y=9

//function declartion . Hoisting doesnot happen in function expression

foo()

function foo(){

console.log("this is foo")


}

//this will say bar is not defined
/*bar()

var bar1= function bar(){

console.log("this is bar")


}*/


// 2. what happens when variable keyword is not used. fe becomes a global variable by default

var fo= 10

function data(){
    fe= 15

console.log(fo)




}

data()
console.log(fe)

//3. what is use of usestrict keyword - "use strict" strictly checks if a variable has been defined using the keyword var or let
//How to force developers to use Var keyword ?
var x= 100


function useStrict(){
    "Use Strict";
console.log(x)
z=150

}
useStrict()
console.log(z)

//4. how can we avoid global variable issues? 
//- we cannot avoid global variable but we can avoid global variables. We can create a common name space. Module pattern using 
//closures and IIFE.


function addition(a, b){

   a+b

}



function User() {
    this.name = 'Bob';
   
    console.log(name)
    }
    
    var user1 = new User();
    var user2 = new User();


    //5 Explain Closures. Why do we need Closures



    function foo() {
        let x = y = 0;
        x++;
        y++;
        return x;
    }
    
    console.log(foo(), typeof x, typeof y);


    var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

var y = 1;
if ("foo") {
  y += typeof f;
}
console.log(y);

// function foo() {
//     return {
//       message: "Hello World",
//     };
//   }
//   console.log(foo());

  function foo() {
    return
    {
      message: "Hello World"
    }
  }
  console.log(foo());



  //closures are functions inside function and they make a function stateful.only goal of closure is to create 
  //self contained module, self contained state to avoid global variable.






