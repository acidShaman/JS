// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr1 = [1,2,3,4,5];
// arr1.splice(1,2);
// console.log(arr1);


// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let newArr = arr1.splice(1,3);
// console.log(newArr);


// - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// arr1.splice(3,0, 'a','b','c');
// console.log(arr1);


// // - Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr1 = [1,2,3,4,5];
// arr1.splice(1,0,'a','b');
// console.log(arr1);
// arr1.splice(6,0,'c');
// console.log(arr1);
// arr1.splice(8, 0, 'e');
// console.log(arr1);
// // - Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
// let arr2 = [3,4,1,2,7];
// let sort = arr2.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sort);


// // - Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей
// let obj = {js:'test', jq: 'hello', css: 'world'};
// let {} = obj;
// let arr2 = [];
// for (var key in obj) {
//     arr2.push(key);
// }
// console.log(arr2);