// //TASK 1
// // let arr = [1,2,3,4,5,6,7,8,9];
// function output(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// // output(arr);
//
// //TASK 2
// let arr = [];
// function fillArray(array) {
//     for (let i = 0; i < 10; i++) {
//         array[i]= Math.round(Math.random()*100);
//     }
//     output(array);
//     return array;
// }
// // fillArray(arr);
//
// //TASK 3
// function maxValue(array) {
//     fillArray(array);
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i];
//         }
//     }
//     console.log(max, 'MAX');
//     return max
// }
// // maxValue(arr);
//
// //TASK 4
// function summary(array) {
//     fillArray(array);
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     console.log(sum,'SUMMARY');
//     return sum
// }
// // summary(arr);
//
// //TASK 5
// let arr1 = fillArray(arr);
// let arr2 = fillArray(arr);
// function arrPlusArr(array1, array2) {
//     let  finalArr = [];
//     for (let i = 0; i < array1.length; i++) {
//         finalArr[i] = array1[i] + array2[i];
//     }
//     console.log(finalArr);
//     return finalArr;
// }
// arrPlusArr(arr1,arr2);

//TASK 6
// let arr = [1, 0, 2, 0, 3, 0, 10, 0, 9];
// function zeroToTheEnd(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             array.splice(i,1);
//             array.push(0);
//         }
//
//     }
//     console.log(array);
// }
// zeroToTheEnd(arr);
// let arr = [1, 0, 2, 0, 3, 0, 10, 0, 9];

// function zeroToTheEnd() {
//     let m = arr.filter(value => value > 0);
//     let n = arr.filter(value => value === 0);
//     console.log(m);
//     console.log(n);
//     m.push(...n);
//     console.log(m);
// }
// zeroToTheEnd();

let arr = [1, 0, 2, 0, 3, 0, 10, 0, 9];
function zeroToTheEnd(array) {
    array.unshift(array.filter(value => value === 0));
    array.unshift(...array.filter(value => value > 0));
    console.log(array);
}
zeroToTheEnd(arr);



