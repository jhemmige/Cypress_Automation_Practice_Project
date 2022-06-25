
const c = new String("Hello")

console.log(typeof(c))

//this is object literals
var books1= {

Title: "book one ",
AuthorName: "John Doe",
summary: function tp(){
return this.Title + "is written by" + this.AuthorName

}

}

var books2= {

    Title: "book Two ",
    AuthorName: "John Dear",
    turningPage: function pt(){
    console.log("turned to page 1")
    
    }
    
    }

console.log(books2.turningPage())
console.log(books1.summary())

console.log(Object.values(books2))
console.log(Object.keys(books1))





