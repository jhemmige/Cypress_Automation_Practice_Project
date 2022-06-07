 // randomnly picking up time to print something Math.floor(Math.random()*100)

    
    // function print(String){

    //     setTimeout(() => {
    //         console.log(String)
    //             }, 2000 );

    //   }

    //   print("start")
    //   print("priting something")
    //   print("finish")
      

    //OUTPUT: waits for 2s before printing

    // function print(String){

    //     setTimeout(() => {
    //         console.log(String)
    //             }, Math.floor(Math.random()*100) );

    //   }

    //   print("start")
    //   print("priting something")
    //   print("finish")


      //Call backs are the earliest way to achieve running functions one after other.


      function print(String, callback){
            setTimeout(() => {

            console.log(String) 
            callback()
            
        }, Math.floor(Math.random()*100))
      }


      print("start", ()=>{
          print("processing", ()=>{
            print ("finished", ()=>{})

          })
      })


      