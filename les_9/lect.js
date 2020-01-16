// function rewarded(changeReward, newPosition) {
//     console.log(this.name);
//     this.payment += changeReward;
//     this.position = newPosition;
// }
// function rewardLogger() {
//     console.log(this.payment);
// }
//
// let worker1 = {
//     name: 'Viktor',
//     position: 'Middle',
//     payment: 400
// };
//
// let worker2 = {
//     name: 'Dima',
//     position: 'Junior',
//     payment: 200
// };
//
// let loggerForWorker1 = rewardLogger.bind(worker1);
// let loggerForWorker2 = rewardLogger.bind(worker2);
//
// rewarded.call(worker1, 100, 'Middle'); // input as arguments
// rewarded.call(worker2, 200, 'Senior');
// rewardLogger.apply(worker1);
//
// console.log(worker1);
// console.log(worker2);
//
// rewarded.apply(worker1, [-150, 'Jun']); //input as array
// rewarded.apply(worker2, [0, 'TL']);
//
//
// console.log(worker1);
// console.log(worker2);
//
// loggerForWorker1();
// loggerForWorker2();
//
// class Product {
//     constructor(name, price, photo) {
//         this.name = name;
//         this.price = price;
//         this.photo = photo;
//     }
// }
// let fraxer = new Product('Wirpool', 2000,'photo.jpg');
// let vacumer = new Product('Bosch', 4000,'bosch.jpg');
// let tv = new Product('Samsung', 1000,'sams.jpg');
//
// let prodArr = [fraxer, vacumer, tv];
//
// function drawProduct() {
//     console.log(`Price is ${this.price}`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Photo is ${this.photo}`);
//     console.log('_________________________');
// }
//
// prodArr.forEach(product => {
//     drawProduct.call(product);
// });
//
// function withCallback(cb) {
//     setTimeout(()=> {
//         cb('HELLO FROM CB')
//     }, 1000)
// }
//
// withCallback((string)=> {
//     console.log(string);
// });

// function withPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve('I AM PROMISE') //resolve goes to '.then' as 'value'
//         },2000)
//     })
// }
// function withPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             reject('REJECTED') //reject  goes to '.catch' as 'reason'
//         },2000)
//     })
// }
//
// withPromise()
//     .then(value => {
//         console.log(value);
//         return 22 // this return will go to the next '.then'
//     })
//     .then(value => {  // PROMISE CHAIN
//         console.log(value);
//     })
//     .catch(reason => {
//         console.error('ERROR: ' + reason);
//     });

// function clearHouse(isClear) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isClear) {
//                 resolve(1000)
//             } else {
//                 reject('CLEAR FUCKING HOUSE FIRST')
//             }
//         }, 1500)
//     })
// }
// function buyClothes(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             money < 1000 ?
//                 reject("I don't have enough money") :
//                 resolve(`Buy jeans for ${money / 2}`)
//         }, 500)
//     })
// }
//
// clearHouse(true)
//     .then(reward => {
//     console.log('I am ggod boy');
//     return buyClothes(reward)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log('ERROR: ' + reason);
//     });


//ASYNC - AWAIT
function clearHouse(isClear) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isClear) {
                resolve(500)
            } else {
                reject('CLEAR FUCKING HOUSE FIRST')
            }
        }, 1500)
    })
}

function buyClothes(money) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            money < 1000 ?
                reject("I don't have enough money") :
                resolve(`Buy jeans for ${money / 2}`)
        }, 500)
    })
}

async function goToWork(isClear){  //async is SUPER IMPORTANT
    try {
        let money = await clearHouse(isClear); //await is also SUPER IMPORTANT
        console.log('I clear house!!!');

        let clothers = await buyClothes(money);
        console.log(clothers);
    } catch (e) {
        console.log('ERROR: ' + e);
    }

}
goToWork(true);
