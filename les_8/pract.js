// //Task 1
// class User {
//     constructor(fname, lname, age, gender, height, weight, status) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.gender = gender;
//         this.height = height;
//         this.weight = weight;
//         this.status = status;
//     }
//     static  sortByAge(array) {
//         return    array.sort((a,b) => a.age > b.age ? 1 : -1)
//     }
//     static  sortByHeight(array) {
//         return    array.sort((a,b) => a.height > b.height ? 1 : -1)
//     }
//     static  sortByWeight(array) {
//         return    array.sort((a,b) => a.weight > b.weight ? 1 : -1)
//     }
//     static sortByFname(array) {
//         return array.sort((a,b)=> a.fname > b.fname ? 1 : -1)
//     }
//     static sortByLname(array) {
//         return array.sort((a,b)=> a.lname > b.lname ? 1 : -1)
//     }
//     static sortByGender(array) {
//         return array.sort((a,b)=> a.gender > b.gender ? 1 : -1)
//     }
//     static sortByStatus(array) {
//         return array.sort((a,b)=> a.status > b.status ? 1 : -1)
//     }
//     toString() {
//         return this;
//     }
//     static filterByAge(array, age) {
//         let filteredArr = [];
//         array.forEach(element => {
//             if (element.age >= age) {
//                 filteredArr.push(element);
//             }
//         });
//         return filteredArr
//     }
//     static filterByHeight(array, height) {
//         let filteredArr = [];
//         array.forEach(element => {
//             if (element.height >= height) {
//                 filteredArr.push(element);
//             }
//         });
//         return filteredArr
//     }
//     static filterByWeight(array, weight) {
//         let filteredArr = [];
//         array.forEach(element => {
//             if (element.weight >= weight) {
//                 filteredArr.push(element);
//             }
//         });
//         return filteredArr
//     }
//     static filterByFname(array, fname) {
//         let filteredArr = [];
//         array.forEach(element => {
//             if (element.fname.toLowerCase() === fname.toLowerCase()) {
//                 filteredArr.push(element);
//             }
//         });
//         return filteredArr
//     }
//     static filterByLname(array, lname) {
//         let filteredArr = [];
//         array.forEach(element => {
//             if (element.lname.toLowerCase() === lname.toLowerCase()) {
//                 filteredArr.push(element);
//             }
//         });
//         return filteredArr
//     }
//     static filterByGender(array, gender) {
//         let filteredArr = [];
//         array.forEach(element => {
//             if (element.gender.toLowerCase() === gender.toLowerCase()) {
//                 filteredArr.push(element);
//             }
//         });
//         return filteredArr
//     }
//     static filterByStatus(array, status) {
//         let filteredArr = [];
//         array.forEach(element => {
//             if (element.status.toLowerCase() === status.toLowerCase()) {
//                 filteredArr.push(element);
//             }
//         });
//         return filteredArr
//     }
// }
//
// let andrew = new User('Andrew', 'Motruk', 19, 'male', 180, 60, 'student');
// let oleg = new User('Oleh', 'Kulyk', 17, 'male', 165, 70, 'developer');
// let oksana = new User('Oksana', 'Mysak', 16, 'female', 170, 55, 'unemployed');
// let misha = new User('Misha', 'Yemets', 35, 'male', 185, 80, 'bartender');
// let max = new User('Andrew', 'Asarzhi', 40, 'male', 200, 50, 'actor');
//
// let users = [andrew, oleg, oksana, misha, max];
// // let a = oksana.toString();
// // console.log(a);
//
// // let sortByAge = User.sortByAge(users);
// // console.log(sortByAge);
//
// // let sortByName = User.sortByFname(users);
// // console.log(sortByName);
// // console.log('_________________');
// // let sortByHeight = User.sortByHeight(users);
// // console.log(sortByHeight);
// // let filterByAge = User.filterByAge(users, 18);
// // console.log(filterByAge);
// // let filterByName = User.filterByFname(users, 'Andrew');
// // console.log(filterByName);
//
// class Array {
//     static min(array) {
//         let min = null;
//         array.forEach(element => {
//             if (typeof element !== 'number') {
//                 throw new Error(`${element} is not a number! Try another array!`)
//             } else if (element < min || min === null ){
//                 min = element;
//             }
//         });
//         return min
//     }
//
//     static minStr(array) {
//         let min = undefined;
//         array.forEach(element => {
//             if (typeof element !== 'string') {
//                 throw new Error(`${element} is not a string! Try another array!`)
//             } else if (min === undefined ){
//                 min = element;
//             } else if (element.length < min.length ){
//                     min = element;
//             }
//         });
//         return min
//     }
//     static filterByIDKey(array) {
//         let filtArr = [];
//         array.forEach(element => {
//             if (element.hasOwnProperty('id')) {
//                 filtArr.push(element);
//             }
//         });
//         return filtArr
//     }
// }
//
// let arr = [0,5,10,-15,25,-20];
// let strArr = ['111','1111','11','1'];
// let objects = [
//     {id:'1', name:'Andrew', age: 18},
//     {fullname: 'Oleh October', status: 'unemployed'},
//     {id: '15', HasMoney: true},
// ];
// let b = Array.minStr(strArr);
// let a = Array.min(arr);
// let c = Array.filterByIDKey(objects);
// console.log(a);
// console.log(b);
// console.log(c);
//
// Array.prototype.mapped = function(func) {
//     let mappedArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] != undefined) {
//             mappedArr.push(func(this[i], i, this))
//         }
//     }
//     return mappedArr
// };
//
// let numbers = [1, 4, 9];
// let roots = numbers.mapped(Math.sqrt);
// console.log(numbers);
// console.log(roots);
//
// Array.prototype.filter2 = (func, a)=> {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (func === true) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr
// };
//
// let array = [1,3,4,7,6,9];
// let filArr = array.filter2(element => {
//     if (element % 3 === 0){
//         return true
//     }
// });
// console.log(filArr);

