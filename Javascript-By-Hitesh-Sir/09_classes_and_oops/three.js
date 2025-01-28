// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     ChangeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }


// console.log(chai.encryptPassword())
// console.log(chai.ChangeUsername())

// Behind the Hood.
function User(username, email, password) {
    this.username = username;
    this.email = email
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.ChangeUsername = function () {
    return `${this.username}`
}

const chai = new User('prince', 'fdj@gmail.com', 'Piranha')

console.log(chai.encryptPassword())
console.log(chai.ChangeUsername())