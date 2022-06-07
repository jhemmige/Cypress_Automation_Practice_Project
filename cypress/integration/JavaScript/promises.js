//CALL BACK 
// function print(string, callback){

// console.log( "this is from print function")

// setTimeout(()=>{

// console.log(string), callback()

// }, 2000)

// }


// print("start", ()=>{

//     print("print processing",()=>{


//         print("justfinished",()=>{})
//     })

// })

//CALL BACK 

// function print(string, callback){
    
//     console.log( "this is from print function")
    
//     setTimeout(()=>{
    
//     console.log(string), callback()
    
//     }, 2000)
    
//     }
    
    
//     print("start", ()=>{
    
//         print("print processing",()=>{
    
    
//             print("justfinished",()=>{})
//         })
    
//     })



//PROMISES

function print(string){

    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
    console.log(string)

    resolve()
    }, 2000)

    })

}

print ("start")
.then(()=>print("printsomething")
.then(()=>print ("finished")))