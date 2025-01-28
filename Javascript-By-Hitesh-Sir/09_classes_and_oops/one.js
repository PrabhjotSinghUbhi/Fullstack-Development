let myHeroes = ['thor', 'sideman'];

let heroPower = {
    thor: 'hammer',
    sideman: 'sling',

    getSpiderPower: function () {
        console.log(`spicy Power is ${this.sideman}`)
    }
}

Array.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}  

heroPower.hitesh()
// myHeroes.hitesh()


// function multiplyBy5(num) {
// return num * 5;
// }

// multiplyBy5.power = 2;

// console.log(multiplyBy5(5))
// console.error(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score) {
//     username = this.username
//     console.log(username)
//     console.log(score)
// }

// createUser("Prabhjot", 45)