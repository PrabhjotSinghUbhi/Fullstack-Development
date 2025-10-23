// const btn = document.getElementById("btn");

// const MyPromise = new Promise((resolve, reject) => {
//   document.querySelector("#btn").addEventListener("click", () => {
//     resolve("Resolved");
//   });
//   document.querySelector("#btn2").addEventListener("click", () => {
//     reject("Rejected");
//   });
// });

// console.log(MyPromise);
// MyPromise.then((res) => {
//   console.log(res);
// }).catch((rej) => {
//   console.log(rej);
// });

async function fun(params) {
  throw new Error('Hello')
}

console.log(fun());
