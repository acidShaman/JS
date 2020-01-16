// let user = {
//     name: 'Viktor',
//     age: 24
// } //OBJECT
// user.girl = 'Igor';
//
//
//
//
// console.log(names[names.length-1]);
// console.log(names.length);
// names[0] = 'Ivan';
// names[100] = 'HELLO'; //adding one more last element
// console.log(names.length);
//
//
// let names = ['Oksana', 'Karina', 'Olga', 'Dima']
//
// names = []; //clearing array (SLOW)
// names.length = 0; // FASTER
//
// console.log(names);
//
// names.push('Igor');// !!!adds element to the end of an array!!!
// names.push(123);
// names.push(true);
//
// names.unshift('Viktor'); // !!!adds element to the start of an array!!!
// console.log(names);
//
// names.pop();//!!!erases last element!!!
// names.shift()// !!!erases first element!!!
//
// console.log(names);


// let arr = [1,2,['ZIL','Volvo'], 8, true, 'Oleh'];
// console.log(arr);
// let deletedFromStart =  arr[2].shift();
// console.log(arr);
// console.log(deletedFromStart);


// let rrr = [1, 2, 3, {name: 'Taras'}];
//
// console.log(rrr[3].name);
// console.log('______________________');
//
// for (let i = 0; i < rrr.length; i++) {
//     console.log(rrr[i]);
// }

// let colors = ['green','red','yellow','blue','pink','gray']

// for (let i = 0; i < colors.length; i++) {
//     if (i === 3) {
//         console.log('FUCK!');
//     }
//     console.log(colors[i]);
// }

// for (let color of colors) {
//     console.log(color);
// }
//
// console.log('______________________');
//
// let user = {
//     name: 'Taras',
//     age: 15,
//     girl: false
// }
//
//
//
// for (let xxx in user){ //goes through indexes
//     console.log(xxx);
// }
// console.log('______________________');
// let i = 0;
// while (i < colors.length) {
//     console.log(colors[i]);
//     i++;
// }

let array = [2,17,13,6,22,31,45,66,100,-18]

// let i = 0;
// //Task1
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }
// console.log('______________________');
//
// //Task2
// for (let j = 0; j < array.length; j++) {
//     console.log(array[j]);
// }
// console.log('______________________');
//
// //Task3
// let k = 0;
// while (k < array.length) {
//     if ((k%2) == 0) {
//         console.log(array[k]);
//     }
//     k++;
// }
// console.log('______________________');
//
// //Task4
// for (let j = 0; j < array.length; j++) {
//     if (j%2 === 1) {
//         console.log(array[j])
//     }
//
// }
// console.log('______________________');
//
// //Task5
// let m = 0;
// while (m < array.length) {
//     if ((array[m]%2) == 0) {
//         console.log(array[m]);
//     }
//     m++;
// }
// console.log('______________________');
//
// //Task6
// for (let j = 0; j < array.length; j++) {
//     if (array[j]%2 === 1) {
//         console.log(array[j])
//     }
//
// }
// console.log('______________________');
//
// //Task7
// for (let j = 0; j < array.length; j++) {
//     if (array[j]%3 === 0) {
//         array[j] = 'okten';
//     }
//     console.log(array[j]);
// }
// console.log('______________________');

//// Task8
// for (let j = array.length-1; j > -1; j--) {
//     console.log(array[j]);
// }
// console.log('______________________');

//TASK10
// let nums = [];
// const n = 1
// for (let i = 0; nums.length < 50; i++) {
//      nums.push(i*2);
// }
// for (let i = 0; nums.length < 100; i++) {
//     if (i%2 === 1) {
//         nums.push(i)
//     }
// }
// console.log(nums);
