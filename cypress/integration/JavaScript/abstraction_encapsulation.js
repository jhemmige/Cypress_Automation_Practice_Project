//Abstraction in class started in ES2019. Hiding the implementation details of method or function is encapsulation.

class number{

    a=1
    e=2
    i=9
   #o=5 //marking a variable with # in front of it makes it private.

}

//The above abstract class is equivalent to the class below 
class co{


constructor(a, e, i, o, ){

this.a = a
this.e=e
this.i=i
this.o=o

}


}




let num = new number()
console.log(num.a)
console.log(num.i)
console.log(num.o)// o cannot be accessed since its private.