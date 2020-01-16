// wake up
// brush teeth
//eat apple
//code 3 tasks
//meditate
//english
//eat kebab
//sleep

function randomizer() {
    let a = Math.random();
    if (a > 0.25) {
        return true
    } else {
        return false
    }
}

function wakeUp(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve('Woke up! Good')
            } else {
                reject('OMG WAKE UP!!!')
            }
        }, 1000)
    })
}

function brush(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve('Good start!')
            } else {
                reject('LOL NO TOOTHBRUSH, ARE YOU KIDDING?')
            }
        }, 500)
    })
}

function eatApp(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve('Ready to Code!')
            } else {
                reject("No apple? I'm not gonna start my day without apple")
            }
        }, 500)
    })
}

function coded(func, tasks) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve(`I've done ${tasks} tasks`)
            } else {
                reject('Omg, lazy shit!')
            }
        }, tasks*500)
    })
}
function meditate(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve('Oohmmmm.... Okay back to business.')
            } else {
                reject('Why dont you meditate?')
            }
        }, 2000)
    })
}
function english(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve('Finally i have written that goddamn post!')
            } else {
                reject('Not today, english, not today...')
            }
        }, 1000)
    })
}

function eatKebab(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve('KK, Im full, get back to work!')
            } else {
                reject('What? No kebab, fuck off then!')
            }
        }, 500)
    })
}

function goToSleep(func) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (func) {
                resolve('Today was a good day...*snoring*')
            } else {
                reject('OMG Ive got shit ton of work to do((((')
            }
        }, 500)
    })
}

// async function myDay() {
//     try {
//         let awake = await wakeUp(randomizer());
//         console.log(awake);
//
//         let brushTeeth = await brush(randomizer());
//         console.log(brushTeeth);
//
//         let eatApple = await eatApp(randomizer());
//         console.log(eatApple);
//
//         let cod = await coded(randomizer(), 5);
//         console.log(cod);
//
//         let med = await meditate(randomizer());
//         console.log(med);
//
//         let post = await english(randomizer());
//         console.log(post);
//
//         let kebab = await eatKebab(randomizer());
//         console.log(kebab);
//
//         let sleep = await goToSleep(randomizer());
//         console.log(sleep);
//
//     } catch (e) {
//         console.log('ERROR: ' + e);
//     }
// }
// myDay();

wakeUp(randomizer())
    .then(value => {
        console.log(value);
        return brush(randomizer())
    })
    .then(value => {
        console.log(value);
        return eatApp(randomizer())
    })
    .then(value => {
        console.log(value);
        return coded(randomizer(), 5)
    })
    .then(value => {
        console.log(value);
        return meditate(randomizer())
    })
    .then(value => {
        console.log(value);
        return english(randomizer())
    })
    .then(value => {
        console.log(value);
        return eatApp(randomizer())
    })
    .then(value => {
        console.log(value);
        return goToSleep(randomizer())
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.error('ERROR: ' + reason)
    });


