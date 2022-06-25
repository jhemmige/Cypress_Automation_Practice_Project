
// 5 - immediately invoked function. Function instance is created, function is executed and function is discarded
// they are immediately available for garbage collection once executed thereby freeing up memeory
//this function didnot seem to run along with other other functions in function concepts.js
//anonymous function that is invoked immediately is IIFE

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


 

//immmediately invoked function. WHen the semicolon is not there, this throws error thinking that its a continuation of hte above function
    ;(function(){

    console.log("HI there, what's happening")
    
    })()

//immmediately invoked function.

   ; (()=>{

console.log("Fat pipe operator ")

    })()


let a ="Geetha"

;(function(){


console.log( a +" ,this  is an iffe function")

})()   


;(function addition(){

console.log("this is function from addtion")


})()

//addition()


;(()=>
{
    console.log("this is anon function")
    
    })()
    



  





