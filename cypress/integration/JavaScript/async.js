//since javascript is asynchronous, a is printed as 10 and not 11. 
let a =10
setTimeout(()=>a++,2000)
console.log(a)