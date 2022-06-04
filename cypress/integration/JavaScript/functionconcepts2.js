
// 5 - immediately invoked function

//this function didnot seem to run along with other other functions in function concepts.js

//this ws the error it showed when run in the other file. But seems to run on its own
/**TypeError: console.log(...) is not a function
    at Object.<anonymous> (/Users/jayashreehemmige/Documents/MyFirstJavaScriptFolder/TestAutomation_Framework_May3_2022/cypress/integration/JavaScript/functionconcepts.js:79:1)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 */



   


(function(fn,ln){

    console.log(fn + " " + ln) 
    
    })("Immediately", "invoked function" )

    console.log("*********************************************")


    //6 function is a first class citizen in JS
    //a function declaration syntax can be invoked even before the function is defined
    //however a function expression syntax can be invoked ONLY after its defined.
    //if I uncomment b() ( at the top), this will throw error.
 a()
//b()
function a(){

    console.log("function declared in a")
}

var b= function(){

    console.log("function declared in b")

}
b()

// a function can accept another function as a parameter and invoke it 
function outer(func){

func()

}

function inner(){

console.log("this is frm innerfunction")

}

function newfunc(){

    console.log("this is fom new function")
}

outer(inner)
outer(newfunc)



