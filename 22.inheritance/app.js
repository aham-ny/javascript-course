class User {
    constructor(username, email) {
        this.username = username;
        this.email = email
        this.score = 0
    }
    login() {
        console.log(`${this.username} just logged in`)
    }
    logout() {
        console.log(`${this.username} just logged out`)
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`)
    }
}

class Admin extends User {
    constructor(username, email, title) {
        super(username, email)
        this.title = title
    }
    deleteUser(users, selectedUser) {
        this.users = users.filter(user => user.username !== selectedUser.username)
        return this;
    }
}

const userOne = new User('john', 'john@test.com')
const userTwo = new User('helen', 'helen@test.com')
const userThree = new Admin('micheal', 'micheal@test.com', 'doctor')
// console.log(userOne, userThree)

let users = [userOne, userTwo, userThree];
console.log(users)
userThree.deleteUser(users, userTwo)