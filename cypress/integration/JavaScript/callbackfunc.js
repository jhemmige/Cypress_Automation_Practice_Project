// a function can accept another function as a parameter and invoke it . This is call back function. 
function outer(func){

    func()
    
    }
    
    function inner(){
    
    console.log("this is frm innerfunction")
    
    }
    
    function newfunc(){
    
        console.log("this is fom new function")
    }
    
    outer(inner)
    outer(newfunc)