// let randomValue = { name: "Prabhat" }
// randomValue = 23

// if (!typeof randomValue === "string") {
// console.log("It's not a string!")
// } else {
// console.log("Yay it's a string!")
// }


// function mul(x) {
//     return function(y) {
//     return function(z) {
//     return function(w) {
//     return function(p) {
//     return x * y * z * w * p;
//     };
//     };
//     };
//     };
//     }
//     console.log(mul(6)(7)(8)(9)(1));


//     console.log(0.9 + 1.2);
//     console.log(5.7 + 0.9 == 1.6);

//     console.log(null >=0 )

    
    
//     let person = 'Hue'

// if (true) {
//  let person = 'Haley'

//  if (true) {
//  let person = 'Harry'
//  console.log(person)
//  }
// }
// console.log(person)

// let s = new Set();

// s.add(45).add(45).add(10).add(30).add(30);
// console.log(s.size);


// let BookDetails = {
//     bookName: 'My experiences from 100 Days of Code',
//     Author: 'Nancy Dry',
//     price: '300 INR'
//     }

//     const randomValue = 21;
 
//     function getInfo() {
//     console.log(typeof randomValue);
//     const randomValue = 'Prabhat';
//     }
    
//     getInfo(); //ReferenceError: Cannot access 'randomValue' before initialization



    let gradeSheet = function(marksObtained, totalMarks) {
        let percentage = (marksObtained / totalMarks) * 100
        if (percentage >= 90){
        return "Grade E"
        }
        
        else if (percentage >= 80){
        return "Grade A+"
        }
        
        else if(percentage >= 70){
        return "Grade A"
        }
        
        else if(percentage >= 60){
        return "Grade B+"
        }
        
        else if (percentage >= 50){
        return "Grade B"
        }
        
        else if (percentage >= 40){
        return "Grade C+"
        }
        
        else if (percentage >= 30){
        return "Grade C"
        }
        
        else {
        return "Fail"
        }
        }
        
        console.log(gradeSheet(430, 500))


    var a=[];
 a.unshift(0);
 a.unshift(1,[2,3]);
 a.shift()
 a.unshift(4,[5,6]);
 a.shift()
 document.write(a[2]);