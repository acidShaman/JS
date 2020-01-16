// //Task 1
//
// let a = parseInt(prompt('Enter value:'));
// let b =  parseInt(prompt('Enter value:'));
// let c =  parseInt(prompt('Enter value:'));
// // console.log(a);
// // console.log(b);
// // console.log(c);
//
//  if (a > b && a > c) {
//      console.log(a);
//      if (b > c) {
//          console.log(b);
//          console.log(c);
//      } else {
//          console.log(c);
//          console.log(b);
//      }
//  } else if (b > a && b > c) {
//      console.log(b);
//      if (a > c) {
//          console.log(a);
//          console.log(c);
//      } else {
//          console.log(c);
//          console.log(b);
//      }
//  } else {
//      console.log(c);
//      if (a > b){
//          console.log(a);
//          console.log(b);
//      } else {
//          console.log(b);
//          console.log(a);
//      }
//  }

 //Task2-3
let color = prompt("Цвет светофора:");
let isRoadClear = confirm("Is road clear?");

 switch (color) {
     case 'green':
         if (isRoadClear === true) {
             console.log('Go ahead');
             break;
         } else {
             console.log('Let those breakers pass!');
             break;
         }
     case  'yellow' :
         if (isRoadClear === true) {
             console.log('Still wait!');
             break;
         } else {
             console.log('Wait!');
             break;
         }
     case 'red' :
         if (isRoadClear === true) {
             console.log('Stop!');
             break;
         } else {
             console.log('STOOOOP!!!!');
             break;
         }
     default :
         console.log('Do whatever you want, moron...');
 }




