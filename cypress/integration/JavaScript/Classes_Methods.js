module.export =  


class Person

{
    age=25

    //A class has a getter method 
    get location(){

    return "canada"

    }

//class has a constructor . We use constructor keyword. The variables defined here are instance variables. If we have to access this variable 
// through out the class we need to use this keyword
    constructor(firstName, lastName){

    this.firstName= firstName
    this.lastName= lastName

    }

    fullName(){

       console.log( this.firstName +" " + this.lastName)

    }


}
const p=  new Person("jayashree","hemmige")
console.log(p.age)
console.log(p.firstname)
console.log(p.fullname())
//console.log(p.location="newyork")
//console.log(p.location)
console.log(p.age=30)