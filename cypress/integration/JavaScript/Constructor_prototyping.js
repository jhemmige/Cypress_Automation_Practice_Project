//instad of defining the getsummary property in object iself, we can create something call prototype

function Book(name, author, year, )

{

this.name= name
this.author= author
this.year= year
//this.getSummary= function summary(){

//return this.author + "is the author of the book" + this.name +" which was written in"+  this.year

}

let book1 = new Book("Bookie","jane austin","2013")


Book.prototype.getSummary= function summary(){
    return this.author + " is the author of the book " + this.name +" which was written in "+  this.year
}

Book.prototype.getAge= function getage(){
    const date = new Date().getFullYear()
    console.log(date)
    const years = date-(this.year)
    return this.name +" is " + years + " years old "
}


console.log(book1.getSummary())
console.log(book1.getAge())

