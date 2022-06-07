//since javascript is asynchronous, a is printed as 10 and not 11. 
let a =10
setTimeout(()=>a++,2000)
console.log(a)



function print(string){

    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
    console.log(string)

    resolve()
    }, 2000)

    })

}




async function printAll(){

    await print("start")
    await print ("processing")
    await print("finished")


}

printAll()