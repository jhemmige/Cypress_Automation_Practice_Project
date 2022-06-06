class Person{

designation="QA LEAD"
constructor(name,age){
this.name=name
this.age=age

}
//these are property getters
get location(){

let place= "canada"

return place
//return 10

}

walk(){


console.log( this.name  + "is walking")

}
//these are methods
talk(){

    console.log( this.name + "is talking")

}


}

const per = new Person("Jaas",30) //this can be passed as an argument or can be assigned seperately like below
console.log(per.name="jaya")
pconsole.log(per.age=15)
console.log(per.name)
console.log(per.age)
per.walk()
per.talk()
console.log(per.location) //returns from getter method
console.log(per.location="NYC")//assigned at run time
console.log(per.designation)



class Fellow_being extends Person{


    constructor(name, age, department){

    super(name,age)
    this.name=name
    this.age=age
    this.department=department
    
    }


    greet(){

    console.log("Hello" + this.name)


    }

}


const fb = new Fellow_being("shri",25,"devops")
console.log(fb.name)
console.log(fb.age)
console.log("marketing")
fb.name="Omi"
fb.age=10
console.log(fb.location="Bangalore")
fb.walk()
fb.talk()
fb.greet()
console.log(fb.department="Quality Assurance")

const np = new Person("Krithi", 13)
console.log(np.name)
console.log(np.age)
np.talk()