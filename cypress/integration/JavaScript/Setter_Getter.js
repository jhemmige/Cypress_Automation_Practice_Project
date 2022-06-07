//Getters and Setters helps in setting and retrieving properties

class Person_new {

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
    
    const per = new Person_new()
    per.name="sobrina"
    per.age=26
    console.log(per)
    
    per.eats ="pizza"
    per.dinner
    
    console.log(per.location)