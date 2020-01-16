// let arr1 = [5,9,19,6,0,7,55,3];
// let arr2 = ['Dima','Viktor','Oleg','Pasha','Artur','Karina'];

// let numbers = arr1.concat(arr2);
// console.log(numbers);
// console.log(arr1);
// console.log(arr2);
//
// let numbers = [...arr1,...arr2]; // new variant
// console.log(numbers);
//
// let a = arr1.some((value) => {
//     return value >= 0;
// } );
// console.log(a);
//
// let b = arr1.every((value) => value >= 0);
// console.log(b);
//
// let c = arr1.reverse();
// console.log(arr1);
//
// let k = arr2.includes('Oleg', 3);
// console.log(k);
//
// arr2.forEach(((value, index) => {
//     if (value === 'Oleg'){ //cancelles iteration if needed
//         return
//     }
//     console.log(value);
// }));
//
// let filter = arr1.filter((num, i ) => {
//     return i % 2 === 0;
// });
// console.log(filter);
//
// let filter2 = arr2.filter((name ) => {
//     return name.toLowerCase().includes('k'); // returns every value it finds
// });
// console.log(filter2);
//
// let find = arr2.find(value => {
//     return value.toLowerCase().includes('k') //returns first value it finds
// });
// console.log(find);
//
// let find = arr2.findIndex(value => {
//     return value.toLowerCase().includes('k') //returns first index it finds
// });
// console.log(find);
//
//
// let arrToFlat = [
//     1,2,3,4,'Hello',true,
//     [6,'JS',false, ['Ferrari','Toyota']],
//     'Tank','Train'
// ];
// let anies = arrToFlat.flat(3); //new feature, sometimes cannot work
// console.log(anies);
// console.log(Array.isArray());
//
// let sort = arr2.sort((a, b) => {
//     if (a > b ) { //this structure helps you sort strings
//         return 1;
//     } else {
//         return -1;
//     }
//     // return a - b; //easy sort method from smallest to biggest
//     // return b - a; //from biggest to smallest
// });
//
// console.log(sort);
//
// let s1 = 'aaaa';
// let s2 = 'bbb';
//
// console.log(s1 < s2);
//
// let s = arr2.join('_____'); //argument is separator
// console.log(s);
//
// let number = arr1.lastIndexOf(3);
// console.log(number);
// let numbers = arr1.slice(1,3); //cuts of elements from 1 including to 3 excluding
// console.log(arr1);             // and returns them
// console.log(numbers);
//
// let numbers = arr1.splice(3, 1,  false, 'TEST' );
// //!!if you use negative values in start it will start from the end of array!!
// console.log(numbers);
// console.log(arr1);
//
// let numbers = arr1.map(value => { //takes every element
//     return value + 10             // and modify it
// });
// console.log(numbers);
//
// let users = [
//     {
//         name: 'Dima',
//         age: 13
//     }, {
//         name: 'Oleg',
//         age: 17
//     }, {
//         name: 'Viktor',
//         age: 25
//     }, {
//         name: 'Pasha',
//         age:  35
//     }
// ];
//
// let newUsers = users.map((user, index) => {
//     user.id = index + 1;
//     user.age = user.age / 2 ;
//     return user;
// });
// console.log(newUsers);
//
// let users = [
//     {
//         name: 'Dima',
//         age: 13
//     }, {
//         name: 'Oleg',
//         age: 17
//     }, {
//         name: 'Viktor',
//         age: 25
//     }, {
//         name: 'Pasha',
//         age:  35
//     }
// ];
// let number = users.reduce((previousValue, currentValue) => {
//     console.log(previousValue + currentValue.age);
//     console.log('_________________');
//     return previousValue + currentValue.age; //summs elements. RESULT goes to 'previousValue'
// }, 0);//<---initial value adds up with sum<---
//
//
// let number = arr1.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue; //summs elements. RESULT goes to 'previousValue'
// },100); //<---initial value adds up with sum<---
// console.log(number);

// //TASK 1,2
// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];
// let newarr = [...arr1,...arr2];
// console.log(newarr);
//
// //TASK 3
// let arr1 = [1,2,3];
// let newArr = arr1.reverse();
// console.log(newArr);
//
// //TASK 4
// let arr1 = [1,2,3];
// let newArr = arr1.splice(3, 0, 4,5,6);
// console.log(arr1);
//
// //TASK 5
// let arr1 = [1,2,3];
// let newArr = arr1.splice(0, 0, 4,5,6);
// console.log(arr1);
//
// //TASK 6
// let arr1 = ['js','css','jq'];
// console.log(arr1.shift());
//
// //TASK 7
// let arr1 = ['js','css','jq'];
// console.log(arr1.pop());
//
// //TASK 8
// let arr1 = [1,2,3,4,5];
// let arr2 = arr1.slice(0,3);
// console.log(arr2);

// //TASK 9
// let arr1 = [];
// for (let i = 1; i < 11; i++) {
//     arr1.push(i*2);
// }
// console.log(arr1);

// //TASK 10
// let arr2 = [];
// for (let i = 0; i < 10; i++) {
//     arr2[i] = Math.round(Math.random()*100);
// }
// console.log(arr2);


// //TASK 11
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// let sortage1 = users.sort((a, b) => {
//     if (a.age > b.age ) { //this structure helps you sort strings
//         return 1;
//     } else {
//         return -1;
//     }
//     // return a - b; //easy sort method from smallest to biggest
//     // return b - a; //from biggest to smallest
// });
// console.log(sortage1);
// let sortage2 = users.sort((a, b) => {
//     if (a.age > b.age ) { //this structure helps you sort strings
//         return -1;
//     } else {
//         return 1;
//     }
//     // return a - b; //easy sort method from smallest to biggest
//     // return b - a; //from biggest to smallest
// });
// console.log(sortage2);
// let sortname1 = users.sort((a, b) => {
//     if (a.name.length > b.name.length ) { //this structure helps you sort strings
//         return 1;
//     } else {
//         return -1;
//     }
//     // return a - b; //easy sort method from smallest to biggest
//     // return b - a; //from biggest to smallest
// });
// console.log(sortname1);









