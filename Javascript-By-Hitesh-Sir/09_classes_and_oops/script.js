const user = {
    username: 'hitesh',
    loginCount: 5,
    sighIn: true,
    report: function () {
        console.log(this);
        return 0;
    }
}

console.log(this);

