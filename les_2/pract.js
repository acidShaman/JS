// //Task1
// let a = parseInt(prompt('Enter ZERO:', ));
// if (a === 0) {
//     console.log('correct');
// } else {
//     console.log('wrong');
// }

// //Task2
// let min = parseInt(prompt('Enter value from 0 to 59:', ));
// if (min >= 0 && min < 15) {
//     console.log('1 quarter');
// } else if (min >=15 && min < 30) {
//     console.log('2 quarter');
// } else  if (min >= 30 && min < 45) {
//     console.log('3 quarter');
// } else {
//     console.log('4 quarter');
// }

// // Task3
// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//     let sum = a + b;
//     console.log(`Sum = ${sum}`);
// } else {
//     let dif = a - b;
//     console.log(`Difference = ${dif}`);
// }

// // Task 4
// let month = parseInt(prompt('Enter number of month:', ));
// if (month <= 2 || month == 12){
//     console.log('winter');
// } else if (month <= 5){
//     console.log('spring');
// } else if (month <= 8){
//     console.log('summer');
// } else {
//     console.log('fall');
// }

// //Task 5
// let value = parseInt(prompt('Enter number from 1 to 4', ));
// let result;
// switch (value) {
//     case 1:
//         result = 'winter';
//         break;
//     case 2:
//         result = 'spring';
//         break;
//     case 3:
//         result = 'summer';
//         break;
//     case 4:
//         result = 'fall';
//         break;
//     default:
//         result = 'Please, enter number from 1 to 4';
// }
// console.log(result);

//Task 6

let value = parseInt(prompt('Enter number from 1 to 12', ));
let result;
switch (value) {
    case 1:
        result = 'January';
        break;
    case 2:
        result = 'February';
        break;
    case 3:
        result = 'March';
        break;
    case 4:
        result = 'April';
        break;
    case 5:
        result = 'May';
        break;
    case 6:
        result = 'June';
        break;
    case 7:
        result = 'July';
        break;
    case 8:
        result = 'August';
        break;
    case 9:
        result = 'September';
        break;
    case 10:
        result = 'October';
        break;
    case 11:
        result = 'November';
        break;
    case 12:
        result = 'December';
        break;
    default:
        result = 'Please, enter number from 1 to 12';
}
console.log(result);




