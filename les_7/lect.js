//callback
//event-loop
//closures
//recursion

function muF(a, b) {
    console.log(a + b);
}


muF(true, 'qqq');
muF([1234, 564564], {nake: 'Nike'});


function ff222() {
    muF(10,7);
}

function FWCallback(a, callback) {
    console.log(a);
    callback();
}

FWCallback(10,() => {
    console.log('HELLO FROM CALLBACK!');
});

FWCallback('test', function () {
    console.log('MI NAME IS VOVA!');
});


setTimeout(() => {//runs code with delay
    console.log(1);
}, 2000); // measures in ms (1000ms = 1s)

console.log(2);

setTimeout(() => {
    console.log(3);
}, 500);


function clearHouse(isHouseClear, cb) {
    setTimeout(() => {
        if (isHouseClear) {
            cb(null, 1000);
        } else {
            cb(new Error('CLEAR HOUSE FIRST'), null);
        }
    }, 2000);
}

clearHouse(true, (err, reward) => { //first parameter in callback
    if (err) {                                       // MUST be error then anything else
        console.log(err);
    } else {
        console.log('HELLO FROM CB');
        console.log(`BUY JEANS FOR ${reward}$`);
    }

});

{               //closures helps you avoid getting anything from anywhere
    let x = 10;
}

console.log(x);

function user(userName, userGirl) {
    let name = userName;
    let girl = userGirl;
    // return name; // return allows name to be seen outside function
    return {
        getName: () => {
            console.log(`My name is ${name} and my girl is ${girl}`);
        },
        setName: (newName) => name = newName,
        getGirl: () => {
            console.log('NO WAY');
        }
    }
}

let viktor = user('DIMA','IRA');
viktor.getName();
viktor.setName('Ivan');
viktor.getName();
viktor.getGirl();

function counter() {
    let x = 0;
    return () => {
        x++;
        console.log(x);
    }
}

let c = counter();
console.log(c.toString());
c();
c();
c();
c();
c();
console.log('________________');
let z = counter()
z()
z()
z()
z()
z()
z()
z()


