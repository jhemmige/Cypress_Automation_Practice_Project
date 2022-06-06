let a = [1,2,5,3,4,9,7,6,8]

//for( i in a){

//console.log(i + " " + a[i])

//}

//Object.keys(pass the object here)

for (val of a){

console.log(val)

}


let computer = {
width: 1500,
height: 500,
screen:{
type: "touchscreen",
size: "14 inches"

}, 
memory: {

Type: "SSD",
Speed: " 400mhz"

}, 
processor:{

model: "i5",
Baseblock: "2.5GHz"

}

}



//console.log(computer.processor.model)

let c= Object.keys(computer)
console.log(c)
let vals= Object.values(computer)
console.log(vals)



