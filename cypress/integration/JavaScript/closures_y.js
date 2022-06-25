//CLOSURES FROM INTERVIEW QUESTIONS YOUTUBE - https://www.youtube.com/watch?v=Zb4dPi7CANU&t=944s

var z= (function(){
function clos(){

    function custlogin(){
    
    console.log("from login scope")
    
    }
    
    function custinvoice(){
    
    console.log("from invoice scope")
    
    }
    
    function custpay(){
    
    console.log("from payment scope")
    
    
    }
    
    return {
    
      custlogin,
      custinvoice
    
    }
    
    }})()
    
   