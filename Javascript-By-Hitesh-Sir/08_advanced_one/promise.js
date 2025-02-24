//! WHAT ARE PROMISES.
/*
^   In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle asynchronous operations in a cleaner way compared to callbacks.

?   WHY USE PROMISES:-
    *   Avoid callback hell (nested callbacks)
    *   Better error handling
    *   More readable and maintainable code

?   CREATING A PROMISE.
    *   A Promise takes a function with two parameters: resolve (if successful) and reject (if failed).
*/

const promiseOne = new Promise(function (resolve, reject) {
    // Do any async task
    setTimeout(() => {
        resolve('Async task is complete.')
        resolve();
    }, 1000);
})

/*
^   CONSUMING A PROMISE.
?       You handle a Promise using .then() for success and .catch() for failure.
*/

promiseOne
    .then(function () {
        console.log('Promise Consumed')
    })
    .catch((err) => {
        console.error("promise could not be Consumed");

    })

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("task 2 is completed.");
        resolve();
    }, 1000);
}).then(function () {
    console.log("promise consumed again")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: 'chai',
            email: 'chaiCoffe@gmail.com'
        })
    }, 1000);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: 'prabhjot Singh', email: 'fjfmdmf@gmail.com' })
        } else {
            reject('Error has occurred.')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((usernameReal) => {
    console.log(usernameReal);
}).catch(function (err) {
    console.log(err)
}).finally(() => (
    console.log('finally confirmed.')
))