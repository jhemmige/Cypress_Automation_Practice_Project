//date is a class. hence we need to create obj for it

//https://qaboxletstest-javascriptessentials.netlify.app/date%20-%20operations.html

let d = new Date()
//let nd= new Date(year,month, day,hours)
let nd=new Date(2022,12,3,12)
//console.log(d)
console.log(nd)

console.log(d.getDate())

console.log(d.getUTCFullYear())
console.log(d.getDay())

console.log("this date is set" + d.setFullYear(2000))
console.log(d)

//cosole.log(d.getTimezoneOffset(5))
console.log(d.toDateString())