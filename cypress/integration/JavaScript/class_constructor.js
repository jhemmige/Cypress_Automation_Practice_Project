
class Person {

designation="QA LEAD"
constructor(name,age){
this.name=name
this.age=age

}

//SETTER
set eats(_food){

this.food=_food


}
//GETTER
get dinner(){


console.log(this.name + " Eats " + this.food)

}



get location(){

let place= "canada"

return place
//return 10

}

walk(){


console.log( this.name  + "is walking")

}

talk(){

    console.log( this.name + "is talking")

}


langugages_known(){


    console.log("hindi", "English")
}




}

const per = new Person()
per.name="sobrina"
per.age=26
console.log(per)

per.eats ="pizza"
per.dinner



class Fel extends Person{


    constructor(name, age, department){

    super(name,age)
    this.name=name
    this.age=age
    this.department=department
    
    }


    greet(){

    console.log("Hello" + this.name)


    }

   // POLYMORPHISM: since languages_known is present in both parent and child, preference will be given to child . But if child is commented out, then parent code will be preferred
    langugages_known(){

        super.langugages_known() // this is added when we want to call even the parent method
        console.log("phyton", "Java", "Javascript")
    }
    

}


// const fe= new Fel("nirmal", 13, "baby")
// fe.langugages_known()