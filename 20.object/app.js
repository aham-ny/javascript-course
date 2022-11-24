const userOne = {
    username: 'jack',
    email: 'jack@example.com',
    login() {
        console.log('the user logged in')
    },
    logout() {
        console.log('the user logged out')
    }
}

console.log(userOne.username, userOne.email);
let word = 'username';
console.log(userOne[word]);
console.log(userOne['username'], userOne['email'])
userOne.login()

const userTwo = {
    username: 'jack',
    email: 'jack@example.com',
    login() {
        console.log('the user logged in')
    },
    logout() {
        console.log('the user logged out')
    }
}

console.log(userTwo.username, userTwo.email);
userTwo.login()