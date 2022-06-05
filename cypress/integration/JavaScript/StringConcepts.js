let  str1= "QA box. This is very important since qa is very imPOrtant for software development."
let str2 ="Let's test"

str1.concat(str2)

console.log(str1.concat(" "+ str2 + "!!!"))
//OR
console.log(str1.concat(" ", str2 , "!!!"))

console.log(str1.charCodeAt(3)) //bring unicode for char at 3rd index -b
console.log(str1.match(/QA/ig)) // returns the number of times something occurs. 
//Returns an array and returns regardless of case. [ 'QA', 'qa' ]
console.log(str1.match(/important/g)) //i is actually numer of times something occurs
//returns [ 'important' ]
console.log(str1.match(/important/i))//returns ...
/*[
    'important',
    index: 21,
    input: 'QA box. This is very important since qa is very imPOrtant for software development.',
    groups: undefined
  ]*/


  let newstr= str1.replace(/qa/ig,"Quality Assurance") //replaces qa with Quality Assurance
  console.log(newstr)
  //Quality Assurance box. This is very important since Quality Assurance is very imPOrtant for software development.

  console.log(str1.search(/important/ig)) // returns 21  
  console.log(str1.indexOf("important")) // returns 21
  //both of the above returns the index of that words . I starts at index 21

  console.log(str1.toLowerCase())
  console.log(str1.toUpperCase())

  console.log(str1.includes("some")) //returns boolean
console.log(str1.includes("QA")) //returns boolean

console.log(str1.endsWith("with")) //returns boolean if a sentences ends with certain word 
console.log(str1.startsWith("QA"))

console.log(str1.repeat(2)) //repeats a string with the count input in the bracket
console.log(str1.repeat(5))
/**QA box. This is very important since qa is very imPOrtant for software development.QA box. This is very important since qa is very imPOrtant for software development.
QA box. This is very important since qa is very imPOrtant for software development.QA box. 
This is very important since qa is very imPOrtant for software development.QA box. 
This is very important since qa is very imPOrtant for software development.QA box. 
This is very important since qa is very imPOrtant for software development.QA box. 
This is very important since qa is very imPOrtant for software development. */

console.log(str1.valueOf()) // no change. 

let mystr="   my   "
console.log(mystr.length) // before trim =8
console.log(mystr.trim().length) //after trim=2






