let a=[1,2,6,9,13,4,18,5,11]

//find the biggest number here

const len= a.length
console.log(a)
console.log("this is the length: " + len)

var bigNum =a[0]
for(let i=0; i< len; i++){

if(bigNum<a[i]){

    bigNum=a[i]



}



}
console.log("This is the biggest number: " + bigNum)
