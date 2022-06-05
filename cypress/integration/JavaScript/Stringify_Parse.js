let person={

name:"jayashree",
dept:"QA",
id:100
}

//converts JS to JSON
let newp= JSON.stringify(person)

console.log(newp)

//parses JSON to js

let parsedjson=  JSON.parse(newp)

console.log(parsedjson)