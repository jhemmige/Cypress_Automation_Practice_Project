
//closures: when outerfunction and innerfunctions are bundled together and inner functions have access 
//to the variables of the outerfunction.
//definition of closure: function along with it lexical scope bundled together is closure.
let num1= 105

function addingnumber(number){

let num2= 200

return number+num2
}
console.log(addingnumber(100)) // this case returns 300. since we have 100 as a local value assigned to the variable

function addingnumber1(number){

    let num3= 200
    return number+num3

}

console.log(addingnumber(num1)) // this case returns 305. since number searches for a local value, if it doesnot find, then it takes the value of global value

function addingnumber3(){
    let num4= 300

    return num1+num4

}

console.log(addingnumber3()) //this retuns 405.


/*function randfunc(){
    var obj1 = {name:"Vivian", age:45};
  
   return function(){
      console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
    }
  }
  
  var initialiseClosure=randfunc()
  initialiseClosure()*/




  var init= function() {
    var name = 'Mozilla'; // name is a local variable created by init
   function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();

  //console.dir(init)

var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(3)(5)(7)); // log 20




function alpha(){
let x= 10
function beta(){
console.log(x)
let y=25
function gamma(){

console.log(y)

}
gamma()
}
beta()
}
alpha()


var clo= function (){

    let ax= 10

   var clo1= function (){

        console.log(ax)

    }

 return clo1


}
//clo()
let amp= clo()
console.log(amp)







