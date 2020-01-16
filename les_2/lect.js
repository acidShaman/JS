console.log('_________________');
console.log('LECTURE');
console.log('_________________');

// let age = 17;
// let role = 'ADMIN';
// let car = true;
// let name = 'Viktor';


let user = {
    name: 'Viktor',
    age: 17,
    wife: false,
    kid: false,
    house: true,
    company: {
        title: 'ELEKS',
        position: 'MSE'
    }
};

console.log(`Hello my name is ${user.name}  I am ${user.age} years old`)

user.company.position = 'SSE';

//delete  user.company;
user.car = 'Volvo'
console.log(user.house);

let key = 'house'
console.log(user['company']['title']);




// if (age >= 18){
//     console.log("ENTER");
// } else {
//     if (role == 'ADMIN'){
//         console.log('ENTER');
//     } else {
//         console.log('Ask your mommy');
//     }
// }

// if (age >= 18){
//     console.log("ENTER");
// } else if (role == 'ADMIN') {
//     console.log('ENTER');
// } else if (age >= 65){
//     console.log(22);
// }


//           F             T
// if ( age >= 18 || role === 'ADMIN'){
//     console.log('Enter');
// } else {
//     console.log('NO WAY');
// }

// && and
// || OR

//let isAdminAnd18 = age >= 18 && role === 'ADMIN';

// //      F                T
// //              F                         T
// if ( age >= 18 && role === 'ADMIN'|| car === true){
//     console.log('Enter');
// } else {
//     console.log('NO WAY');
// }

// if (age === 17){  //!!!!=== looks at value and type of var!!!!
//     console.log(17);
// }



// switch (name) {
//     case "Viktor" || age === 18:
//         console.log('VIKTOR');
//         break;
//     case  'Oleg':
//         console.log('OLEG');
//         break;
//     case  'Olga':
//         console.log('OLGA');
//         break;
//     case 'Karina':
//         console.log('KARINA');
//         break;
//     default:
//         console.log('WRONG NAME');
//         break;
// }


console.log('next');
