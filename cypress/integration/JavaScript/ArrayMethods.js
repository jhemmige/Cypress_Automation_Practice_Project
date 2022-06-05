let arr= [1,4,2,3,9,5,8,7]

console.log(arr.sort())
//console.log(arr.reverse())
console.log(arr.splice(4,5)) // splicing from that number and includes 5 numbers from there.



let employees = 
[
{id:1, name:"aehn", dept:"Devops", age:34},
{id:2, name:"abhnny", dept:"Devs", age:25},
{id:3, name:"joen", dept:"QA", age:35},
{id:4, name:"jenny", dept:"marketing", age:30}
]

//employees.some(val=>console.log(val.age>30))
// checks if some elemets in array pass a test specified by a function
console.log(employees.some(val=>val.age>30))
console.log(employees.some(val=>val.age>50))
// checks if every elemet in array pass a test specified by a function
console.log(employees.every(value=>value.age>18))
console.log(employees.every(value=>value.age>30))

//filters based on certain criteria
console.log(employees.filter(fil=>fil.dept=="QA"))

//sorts employees based on age
// employees.sort((emp1,emp2)=> emp1.age-emp2.age)
// console.log(employees)

//sorts based on Asc
employees.sort((emp1,emp2)=>{

if(emp2.name>emp1.name){

return -1


} if (emp2.name< emp1.name){

return 1
    
}

return 0

})

console.log(employees)
//sorts based on Desc
employees.sort((emp1,emp2)=>{

    if(emp1.name>emp2.name){
    
    return -1
    
    
    } if (emp1.name< emp2.name){
    
    return 1
        
    }
    
    return 0
    
    })
    
    console.log(employees)

//Adding numbers using reduceer method
const ar = [1, 2, 3, 4];
const reducer = (accu, curr) => accu + curr;
console.log(ar.reduce(reducer));