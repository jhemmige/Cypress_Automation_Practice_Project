// const myPromise = Promise.resolve(Promise.resolve('Promise!'));
 
// function funcOne() {
// myPromise.then(res => res).then(res => console.log(res));
// setTimeout(() => console.log('Timeout!'));
// console.log('Last line!');
// }

// async function funcTwo() {
// const res = await myPromise;
// console.log(await res);
// setTimeout(() => console.log('Timeout!'));
// console.log('Last line!');
// }

// funcOne();
// funcTwo();
// console.log( "_______________________________")

// async function* range(start, end) {
//     for (let i = start; i <= end; i++) {
//     yield Promise.resolve(i);
//     }
//     }
    
//     (async () => {
//     const gen = range(1, 3);
//     for await (const item of gen) {
//     console.log(item);
//     }
//     })();



    // function nextLine(arr, x) {
    //     test.push(x);
    //     test.shift(arr[0]);
    //     return arr[0] || x; 
    //     return x;
    //     }
        
    //     var test = [1,2,3,4,5];
        
    //     console.log("Before: " + JSON.stringify(test));
    //     console.log(nextLine(test, 6));
    //     console.log("After: " + JSON.stringify(test));



    // const promise1 = Promise.resolve('First')
    // const promise2 = Promise.resolve('Second')
    // const promise3 = Promise.reject('Third')
    // const promise4 = Promise.resolve('Fourth')
    
    // const runPromises = async () => {
    // const res1 = await Promise.all([promise1, promise2])
    // const res2 = await Promise.all([promise3, promise4])
    // return [res1, res2]
    // }
    
    // runPromises()
    // .then(res => console.log(res))
    // .catch(err => console.log(err))


    const userDetails = {
        firstName: 'Nik',
        lastName: 'Brown',
        
        get something() {
        return this.firstName + ' ' + this.lastName
        },
        
        set age(value) {
        if(isNaN(value)) throw Error('Age should be a number')
        this._age = Number(value)
        },
        get age() {
        return this._age
        }
        }
        
        console.log(userDetails.something)
        userDetails.firstName = 'Bobby'
        console.log(userDetails.something)
        userDetails.age = ''
        console.log(userDetails.age)
        userDetails.age = '21'
        console.log(userDetails.age)