// Use the fetch cmd.

// async function getUsers(e) {
//     const userUrl = await fetch('https://jsonplaceholder.typicode.com/posts')
//     try {
//         const users = await userUrl.json() // need to convert the file into json that will take time.
//         console.log(users)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getUsers();

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(new Error(err)))
.finally(()=>console.log('Wireeeeeeeeeeeeeeeeeeeeee'))

// Async Await.
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let err = true;
//         if (!err) {
//             resolve({ user: 'prince', hero: 'moonlight' });
//         } else {
//             reject('JS went wrong');
//         }
//     }, 1000);
// })

// // Async Function.
// async function Bename() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(Error(error))
//     }
// }

// Bename();

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
