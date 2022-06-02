let currentDate= new Date().getDate()

console.log(currentDate)


let currentMonth= new Date().getMonth()

console.log(currentDate +"_"+ currentMonth)

console.log(currentDate +"-"+ currentMonth)

let currentYear= new Date().getFullYear()
let currentDay= new Date().getDay()
console.log(currentDay)

console.log(currentDate +"-"+ currentMonth + "-" + currentYear + "-" + currentDay )


switch(currentDay){

case 0:

console.log("Today is Sunday")
break;

case 1:
 
    console.log("Today is Monday")
    
    break;

    case 2:
 
        console.log("Today is Tuesday")
        
        break;

        case 3:
 
            console.log("Today is Wednesday")
            break;
            

            case 4:
 
                console.log("Today is Thursday")
                break;
                

                case 5:
 
                    console.log("Today is Friday")
                    
                    break;   

                    case 6:
 
                        console.log("Today is Saturday")
                        
                        
                        break;

                        case 7:
                         


                            console.log("dont know what day it is !")
                        
                            break;


}
