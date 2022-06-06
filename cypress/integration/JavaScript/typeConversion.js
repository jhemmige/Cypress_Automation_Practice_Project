//https://qaboxletstest-javascriptessentials.netlify.app/type%20conversion.html
let str= "123test"
let str1="302"
let str2="hello"

let num= 123

console.log(parseInt(str))
console.log(parseFloat(str))
console.log(Number(str1))

console.log(JSON.parse("false"))
console.log(JSON.parse("true"))

//the code below return same result. Splits the string into array. Basically converts string into array
console.log(str2.split(""))
console.log(str.split(""))
console.log(Array.from(str))

//converts number to String
let newstr= num.toString()
console.log(newstr)
console.log(typeof(newstr))

//another method to convert number to string
console.log(String(300))
console.log(typeof(String(300)))

//representation of a str to number or string
console.log(Array.from(str,Number))
console.log(Array.from(str,String))


