//this is with normal array

//1 - summing up the array
let arr= [2,3,4,6]

let sum=0

for( let i=0; i<arr.length;i++){

sum= sum+arr[i]


}
console.log(sum)

//above method can be also done using foreach and map methods as below
//difference between ForEACH and MAP

//Map returns an array which can inturn be stored and used for futher filter(), map(), reduce()

function add(currentval){

    sum=currentval

}
arr.forEach(add)
console.log(sum)


arr.forEach(values=>{

console.log("foreach" + values)

})

let newNum= arr.map(val=>val*5)

console.log("map"+ newNum)


arr.map(value=>{
console.log("map"+ value)

})




