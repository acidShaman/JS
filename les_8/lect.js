// //SOLID principels
// let arr = [];
// arr.sort((a, b)=> a - b);

// class Human {
//     constructor(age, name, gender) {
//         this.age = age;
//         this.name = name;
//         this.gender = gender;
//     }
//
//     greeting(param) {
//         console.log(`HELLO MY NAME IS ${this.name} and my param is ${param}`);
//     }
//
//     thisLogger() {
//         console.log(this)
//     }
//
//     getName () {
//         return this.name
//     }
//
//     setName (newName) {
//         this.name = newName
//     }
// }
//
// class Developer extends Human{
//     constructor(age, name, gender, skill, reward) {
//         super(age, name, gender);
//         this.skill = skill;
//         this.reward = reward;
//     }
//     work(hours) {
//         console.log(`I am coding on ${this.skill} ${hours} hours per day`);
//     }
//
//     raiseReward(newReward) {
//         const maxPayment = this.reward * 1.1;
//
//         if (newReward > maxPayment) {
//             throw new Error('Find another job');
//         } else {
//             this.reward = newReward;
//             console.log(`My reward is ${this.reward} now!`);
//         }
//     }
// }
//
// let humik = new Human(70, 'Dimasik', 'male');
// let ogorunja = new Human(61, 'Ogor', 'female');
// let devchik = new Developer(28, 'Oleg', 'male', 'CSS', 102);
//
// console.log(devchik);
// devchik.greeting(228);
// devchik.work(15);
// devchik.raiseReward(105);
// devchik.setName('OLEJKA'); //!!!!WE DON'T NEED GETTERS AND SETTERS!!!!
// devchik.name = 'IVANKO';
// console.log(devchik);

//
// console.log(humik);
// console.log('_______________');
//
// // console.log(humik.age);
// // console.log(humik.name);
// console.log(ogorunja);
// console.log('_______________');
//
// humik.greeting('TEST HELLO');
// console.log('_______________');
//
// ogorunja.greeting('HELLO')
// console.log('_______________');
// ogorunja.thisLogger();
// console.log('_______________');

// function Human(age, name, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//
//     // this.greeting = (param) => { //WRONG ! DON"T DO THAT!!!!
//     //     console.log(`HELLO MY NAME IS ${this.name} and my param is ${param}`);
//     // }
// }
// Human.prototype.greeting = function(param) { //CORRECT
//     console.log(`PROTOTYPE ${this.name} and my param is ${param}`);
// };
// Developer.prototype = Object.create(Human.prototype); // !!!BEST ONE!!!
// function Developer(age, name, gender, skill, reward) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.skill = skill;
//     this.reward = reward;
// }
// Developer.prototype.raiseReward = function(newReward) {
//     const maxPayment = this.reward * 1.1;
//
//     if (newReward > maxPayment) {
//         throw new Error('Find another job');
//     } else {
//         this.reward = newReward;
//         console.log(`My reward is ${this.reward} now!`);
//     }
// };
//
// // Developer.prototype = Human.prototype; //BAD ONE, because prototype overrides previous prototype
// // Developer.prototype.greeting = function () {
// //     console.log('RRRRRRRRRRRRRRRRRRRRR');
// // };
// // Developer.prototype.__proto__ = Human.prototype; //__ WEIRD ONE(((
//
//
// let humik = new Human(70, 'Dimon4ik', 'male');
// let oleshka = new  Developer(23, 'Oleg', 'male', 'Python', 105);
// console.log(humik);
// humik.greeting('HELLO FROM 2015');
// oleshka.greeting('1488');
//
// oleshka.raiseReward(112);

// //TASK 1
// class Car{
//     constructor(name, topspeed, type, builtyear, length, hp) {
//         this.name = name;
//         this.topspeed = topspeed;
//         this.type = type;
//         this.builtyear = builtyear;
//         this.length = length;
//         this.hp = hp;
//     }
//     info() {
//        console.log(this);
//     }
// }
//
// let golf = new Car('Volkswagen Golf', 180, 'sedan', 2005, 200, 105);
// let kia = new Car('Kia Seed', 180, 'SUV', 2000, 255, 150);
// let bmw = new Car('BMV e36', 250, 'roadster', 1998, 300, 300);
// let geely = new Car('Geely CD ', 180, 'sedan', 2012, 225, 99);
// let supra = new Car('Toyota Supra', 340, 'sedan', 1999, 300, 2000);
// let golfGTI = new Car('Volkswagen Golf GTI', 250, 'sedan', 2005, 200, 355);
// golf.info();
//
// //TASK 2
// class SuperCar extends Car{
//     constructor(name, topspeed, type, builtyear, length, hp, price, quantity, color) {
//         super(name, topspeed, type, builtyear, length, hp);
//         this.price = price;
//         this.quantity = quantity;
//         this.color = color;
//     }
// }
//
// let ferrari = new SuperCar('Ferrari Monza SP2', 280, 'roadster', 2015, 250, 800, 1000000, 50, 'red');
// let buggatti = new SuperCar('Veyron', 400, 'hypercar', 2010, 250, 1000, 2500000, 300, 'coral');
// let lamborghini = new SuperCar('Gallardo', 350, 'supercar', 2005, 250, 750, 400000, 2000, 'yellow');
// let mclaren = new SuperCar('McLaren Huayra', 380, 'hypercar', 2011, 250, 950, 990000, 400, 'black');
// let tesla = new SuperCar('Tesla Model X', 280, 'roadster', 2012, 250, 800, 170000, 10000, 'grey');
//
// ferrari.info();

//TASK 3
function Human(age, name, gender, gpa, title) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.gpa = gpa;
    this.title = title;

    // this.greeting = (param) => { //WRONG ! DON"T DO THAT!!!!
    //     console.log(`HELLO MY NAME IS ${this.name} and my param is ${param}`);
    // }
}

Human.prototype.greeting = function(param) { //CORRECT
    console.log(`PROTOTYPE ${this.name} and my param is ${param}`);
};
Human.prototype.isAccepted = function (reqSalary) {
    if (Human.age > 18) {
        if (Human.gpa > 80) {
            if (reqSalary < 500) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
};

// //TASK 4
// class Array {
//     constructor(array, element) {
//         this.array = array;
//         this.element = element;
//     }
//     info() {
//         console.log(this.array);
//     }
//     infoEven() {
//         let newArr = this.array.filter(value => value % 2 === 0);
//         console.log(newArr);
//     }
//     infoIndexEven() {
//         let newArr = this.array.filter((value, index) => index % 2 === 0);
//         console.log(newArr);
//     }
// }
//
// let arr = new Array ([1,2,3,4,5,6,7]);
// arr.info();
// arr.infoEven();
// arr.infoIndexEven();


