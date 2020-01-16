// // TASK 1
// function greeting(callback) {
//      callback();
// }
//
// greeting(()=> {
//     console.log('HELLO, MY FRIEND!');
// });

// // TASK 2
// function myfunc(arg, callback) {
//     callback(arg);
// }
//
// myfunc(5, (arg)=> {
//     console.log(`MY HOUSE IS ${arg} TIMES BIGGER`);
// })

// // TASK 3
// function func(x, y, callback) {
//     callback(x, y);
// }
//
// func(4, 6,(arg1, arg2)=> {
//     console.log(`${arg1} + ${arg2}  equals  ${arg1 + arg2}`);
// } );


// // TASK 4
// function compareNumeric(a,b){
//     if (a > b ) return 1; // -1
//     if (a == b) return 0;     // FOR REVERSE SORTING
//     if (a < b) return -1; //  1
// }
// let arr = [1,2,3,4,5];
// function func1(array, callback) {
//     callback(array);
//     console.log(array);
// }
//
// func1(arr, (array)=> {
//     return array.sort(compareNumeric);
// });


// // TASK 5
// function power(arg, pow) {
//     if (pow === 0) {
//         return 1
//     } else if (pow === 1) {
//         return arg
//     } else {
//         return arg * power(arg, pow - 1);
//     }
// }
//
// let a = power(2,4);
// console.log(a);


// // TASK 6
// function fact(fact) {
//     let res = 1;
//     for (let i = 1; i < fact; i++) {
//         res = res * (i + 1);
//     }
//     return res
// }
// let a = fact(10);
// console.log(a);


// // TASK 7
// function factRecursion(fact) {
//     if (fact === 0) {
//         return 1
//     } else {
//         return fact * factRecursion(fact - 1)
//     }
// }
// let a = factRecursion(10);
// console.log(a);


// // TASK 8
// function fibonacciSeq(length) {
//     return length <= 1 ? length : fibonacciSeq(length - 1) + fibonacciSeq(length - 2);
// }
// let a = fibonacciSeq(8);
// console.log(a);