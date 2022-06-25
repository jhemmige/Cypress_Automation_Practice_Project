//in order to overcome the repetitiveness of creating new objects. We create constructors. 


function Book(name, author, year, )

{

this.name= name
this.author= author
this.year= year
//this.getSummary= function summary(){

//return this.author + "is the author of the book" + this.name +" which was written in"+  this.year

}

console.log("book initialized")

//}

const book = new Book("book one", "john doe" ,"2013")

//console.log(book.name)

//console.log(Object.values(book))
//console.log(book.getSummary())