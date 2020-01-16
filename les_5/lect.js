// function f(number) {
//     if (number > 2) {
//         console.log('OK');
//     } else {
//         console.log('WRONG!');
//     }
// }
//
// let secondFunc = function () {
//     console.log(22);
// };
//
// console.log('_________________________________');
//
// function sumator(a,b) {
//     let result = a + b;
//     return result;
// }
//
// let num1 = sumator(8,2);
// console.log(num1);
// let res = sumator('Hello',' JS ');
// console.log(res);
// console.log(res, num1);



// function f() {
//     console.log(22);
// }
//
//
// function f1(x, z = 0) {
//     console.log('HERE');
//     console.log('______________________');
//     if (x === 0) {
//         return
//     } else {
//         return x + z;
//     }
//
// }
//
// let res1 = f1(0, 2);
// console.log(res1);
//
// let res2 = f1(9,100);
// console.log(res2);
//
// let res3 = f1(10);
// console.log(res3);

// function smth(number) {
//     return number + 10;
// }
//
// function sumator(x) {
//     let someNumber = smth(x)
//     console.log(someNumber);
// }
//
// sumator(2);

// function rec(arrToIterate, i) {
//     console.log(arrToIterate[i]);
//     if (i < arrToIterate.length - 1) {
//         rec(arrToIterate, ++i);
//     }
// }
//
// let array = [1,2,3,4,5,6,7,8,9,10,56,110];
// rec(array, 0);


// //TASK1
// function min(x,y,z) {
//     if (x < y && x < z) {
//         console.log(x);
//         return x;
//     } else if (y < x && y < z) {
//         console.log(y);
//         return y;
//     } else {
//         console.log(z);
//         return z;
//     }
// }
//
// min(2,3,-5);
//
// //TASK 2
//
// function max(x,y,z) {
//     if (x > y && x > z) {
//         console.log(x);
//         return x;
//     } else if (y > x && y > z) {
//         console.log(y);
//         return y;
//     } else {
//         console.log(z);
//         return z;
//     }
// }
//
// max(100,14,10);

// //TASK 3
// let array = [5,1,25,2,150,50];
// function task(arrToIter) {
//     let max = arrToIter[0];
//     let min = arrToIter[0];
//     for (let i = 1; i < arrToIter.length; i++) {
//         if (max <= arrToIter[i]) {
//             max = arrToIter[i];
//         }
//     }
//     console.log(max);
//     for (let i = 1; i < arrToIter.length; i++) {
//         if (min >= arrToIter[i]) {
//             min = arrToIter[i];
//         }
//     }
//     console.log(min);
//     return min;
// }
// task(array);

// //TASK 4
// let array = [5,1,25,2,150,50];
// function output(arrToOutput, i) {
//     console.log(arrToOutput[i]);
//     if (i < arrToOutput.length -1) {
//         output(arrToOutput, ++i);
//     }
// }
//
// output(array,0);

// //TASK 8
// let array = [5,1,25,2,150,50];
// function swap(arrToOutput, j) {
//     let temp = null;
//     temp = array[j];
//     array[j] = array[j + 1];
//     array[j + 1] = temp;
//     return array;
// }
// console.log(swap(array, 2));

// //!!!____________________CONSULTATION_____________________!!!!
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// let minIndex = undefined;
// let maxIndex = undefined;
//
// let key = 4;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === key) {
//         maxIndex = i;
//
//         if (minIndex === undefined) {
//             minIndex = i;
//         }
//     }
// }
// console.log(minIndex);
// console.log(maxIndex);



// let [,greet,wheel] = arr;
// // console.log(bol);
// console.log(greet);
// console.log(wheel);
let arr = [false, 'Hello', 'Car', 567, 0, true];
let arr2 = [1, 6, 8, 0, 'rrr'];

let [bol, ...rest] = arr; // "..." - spread-operator
console.log(bol);         // rest element must be last element
console.log(rest);
console.log(arr);

let newArr = [...arr,...arr2]; //связывает два массива
console.log(newArr);

let obj = {
    name: 'Viktor',
    car: false,
    money: 0,
    girl: 'geekgirl'
};

let myClone = {
    name: 'Viktor',
    car: 'LSD',
    house: 'big'
};

let {girl, ...userWOGirl} = obj;

let newMe = {...obj, ...myClone};
console.log(girl);
console.log(userWOGirl);
console.log(newMe);

function f() {
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
        if (arguments[i] < min) {
            min = arguments[i]
        }
    }
    console.log(min);
    console.log(max);
}

f(1,10,-15,30)

