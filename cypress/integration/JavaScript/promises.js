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





console.log("------------------------------------------------------------------------------")




let q= new Promise((resolve, reject)=>{
    let i =3
        if (i==2){
            //console.log ( "resolve promise")
            resolve("success")
        }
        else {
            //console.log ( "reject promise")
            reject("failure")
        }

    })

    q.then((message)=>{
        console.log( "promised accepted", message)
    }).catch((message)=>{

        console.log( "promised caught" , message )
    })




console.log("------------------------------------------------------------------------------")


    var prom= new Promise(function(resolve, reject){

        const x = "geeksforgeeks"
        const y = "geeksforgeekls"

        if(x===y){
           
            resolve("resolved")
        }

        else {
           
        reject("rejected")

        }
    })

    prom.then(function(mess){

        console.log("Success, You are a GEEK'. we have resolved it", mess)

    }).catch(function(mess)
    {
        console.log("oops, You are Not a GEEK'. we have rejcted it", mess)

    })


console.log("------------------------------------------------------------------------------")

    function getUsers(){

      return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
              ])

        }, 1000)


    })
}


function Onfulfilled(uSers){
console.log(uSers)

}

const p = getUsers()
p.then(Onfulfilled)
 





    
  



