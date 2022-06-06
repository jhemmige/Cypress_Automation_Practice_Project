//this is with normal array

//1 - summing up the array
let arr= [2,3,4,6]

let sum=0

// for( let i=0; i<arr.length;i++){

// sum= sum+arr[i]


// }
// console.log(sum)

//above method can be also done using foreach and map methods as below
//difference between ForEACH and MAP

//Map returns an array which can inturn be stored and used for futher filter(), map(), reduce()

function add(currentval){

    sum=sum+currentval

}
arr.forEach(add)
console.log(sum)


arr.forEach(values=>{

console.log("foreach" + values)

})

let newNum= arr.map(val=>val*5)

console.log("map"+ newNum)


arr.map(value=>{
console.log("map"+value)

})


arr.reduce((sum,total)=>sum+total,0)

console.log(arr.reduce((sum,total)=>sum+total,0))

//helps in filtering if a number is even or odd
let evennumberretrieved= arr.filter(evennum=>evennum%2==0)
console.log(evennumberretrieved)

//helps in mapping it to a new value
let multipliedval= arr.map(mul=>mul*3)
console.log(multipliedval)

//helps in addition, substration etc...
let newTotal= multipliedval.reduce((sum,gtotal)=>sum+gtotal,0)
console.log(newTotal)

let newDiff= multipliedval.reduce((diff,newval)=>diff-newval,6) // starts subtracting 6 from the first number
console.log(newDiff)

let fruits=["banana", "apple", "pomegranate", "mango", "pineapple", "grapes", "apricot"]
fruits.sort()
console.log(fruits)




