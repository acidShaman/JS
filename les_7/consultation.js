// let realCopy = {...obj}; // deepcopy method
//
// //DEEP COPY FOR COMPLEX OBJECTS
// let obj1 = {
//     name: 'Andrew',
//     info: {
//         LastName: 'Motruk',
//         birthyear: 2000,
//         relationships: {
//             momma: 'good',
//             poppa: 'very good'
//         }
//     }
// };
//
// function isObject(object) {
// let type = typeof object;
// return type === "object" && !!object;
// }
// function deepCopy(object) { //!!!!!!!!!!!DEEP COPY FOR COMPLEX OBJECTS!!!!!!!!!
//     let target = {};
//     for (let prop in object) {
//         if (object.hasOwnProperty(prop)) {
//             if (isObject(object[prop])) {
//                 target[prop] = deepCopy(object[prop])
//             } else {
//                 target[prop] = object[prop]
//             }
//         }
//     }
//     return target;
// }
//
// let obj2 = deepCopy(obj1);
// obj2.info.LastName = 'NotMotruk';
// obj1.name = 'Ivan';
// console.log(obj2);
// console.log(obj1);
//
function recursion(arr, i) { //SIMPLE EXAMPLE OF RECURSION FUNCTIONS

    if (i < arr.length) {
        console.log(arr[i]);
        recursion(arr, ++i);
    }
}
//
// let arr = [1, 2, 'str', false, 'NUMBER'];
// recursion(arr, 0);
//
// function clearHouse(isClear, callback) {
//     console.log('TIMEOUT START');
//     setTimeout(()=> {
//         if (isClear) {
//             callback(null, 1000);
//         } else {
//             callback(new Error('BAD BOY! HOUSE IS DIRTY'), null);
//         }
//         console.log('TIMEOUT FINISH');
//     }, 2000)
// }
//
// clearHouse(true, (error, reward) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Buy jeans', reward/2);
//         console.log('Buy shirt', reward/4);
//     }
// });
//
// function cbForHouse(error, reward) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Buy jeans', reward/2);
//         console.log('Buy shirt', reward/4);
//     }
// }
//
// let array = [1,2,3,['qqq',true,228],4,5];
//
// function flatten(array) {
//     var flattend = [];
//     (function flat(array) {
//         array.forEach(function(el) {
//             if (Array.isArray(el)) flat(el);
//             else flattend.push(el);
//         });
//     })(array);
//     return flattend;
// }
// let arr = flatten(array);
// console.log(arr);
//
//
// let array = [1,2,3,4,5];
// let k = 3;
// function moveEl(array, shift) {
//     let el = null;
//     for (let i = 0; i < shift; i++) {
//         el = array[array.length-1];
//         array.unshift(el);
//         array.pop();
//     }
//     return array
// }
// let newArr = moveEl(array, k);
// console.log(newArr);

