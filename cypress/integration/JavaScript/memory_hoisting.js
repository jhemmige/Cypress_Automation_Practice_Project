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