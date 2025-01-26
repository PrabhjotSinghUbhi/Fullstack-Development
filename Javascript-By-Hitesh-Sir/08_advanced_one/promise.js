// const promiseOne = new Promise(function (resolve, reject) {
//     // Do any async task
//     setTimeout(() => {
//         console.log('Async task is complete.')
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log('Promise Consumed')
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("task 2 is completed.");
//         resolve();
//     }, 1000);
// }).then(function () {
//     console.log("promise consumed again")
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({
//             username: 'chai',
//             email: 'chaiCoffe@gmail.com'
//         })
//     }, 1000);
// })

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
})