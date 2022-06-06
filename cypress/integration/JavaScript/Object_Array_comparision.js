//watch https://www.youtube.com/watch?v=tx19kr_jfO8&list=PLMZdod-kiMhK7q5R6W-owyNhxHUJ3pf1Y&index=32

let arr1= [4,5,2,1,6]
let arr2=[5,2,6,4,1] 

console.log(arr1===arr2)//returns false

let newarr1= arr1.sort()
console.log(newarr1)
let newarr2= arr2.sort()
console.log(newarr2)

console.log(newarr1===newarr2) //still its false 

console.log(newarr1.toString() ===newarr2.toString()) //this returns true


//in the same way , we can compare compare 2 objects. By sorting them and converting them Stringify