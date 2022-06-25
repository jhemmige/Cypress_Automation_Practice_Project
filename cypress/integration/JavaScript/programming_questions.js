// var str = "Automation"

// var strlength= str.length

// console.log(strlength)

// var rev=""

// for (let i=strlength-1; i>=0; i--){


//     console.log(str[i])
// //console.log(str.charAt(i))

// rev= rev+str[i]

// }

// //console.log(rever)
// console.log(rev)


// var resplch= "#@#@*abc123"

// var num1= resplch.replace(/[^a-zA-Z0-9]/g,"")
// console.log(num1)




// var num= 2345986

// var numrev=0

// // numrev = num%10

// // console.log(numrev)
// // console.log(Math.floor(num/10))

// console.log(typeof(parseInt(num/10)))
// while (num!=0){

//   numrev= numrev*10 + num%10 // 0*10 + 6 = 6|| 6*10 + 8 =68
//   //num= Math.floor(num/10) 
//   num= parseInt(num/10)
  
 
// }
// console.log(numrev)




var b = 98798808328329
var revn=0

while(b!=0){

    revn = (revn*10)+ (b%10) // 0*10 + 98798808328329%10 =9 || 9*10 + 9 =99 || 2 *10 +9 =

    b = parseInt(b/10) // 9879880832832|| 987988083283
}

console.log(revn)