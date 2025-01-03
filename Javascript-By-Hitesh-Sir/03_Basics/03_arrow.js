const user = {
    username: "prabh",
    price: 3245,

    welcomeMessage: function () {
        // console.log(`welcome ${user.username}`);
    }
}

// console.log(user.welcomeMessage())
// Context changed
user.username = "Prince"
// console.log(user.welcomeMessage())

// function fun(){

//     let userName = "Hitesh"
//     console.log(this.username);
// }
// fun();

const chai = () => {
    console.log("hello Prabh")
}