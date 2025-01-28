function setUserName(username) {
    this.username = username
    console.log('Called')
}

function CallMe(username, email, phone) {
    username = setUserName.call(this, username)
    this.email = email;
    this.phone = phone;
}

const temp = new CallMe('chai', 'chai@fb.com', '8559889899')
console.log(temp)