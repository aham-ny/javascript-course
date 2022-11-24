// OOP/functional programming paradigm
// problem solving: investigate diff solution and choose the solution considering the constraint and context of the problem

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

const userOne = new User('hanna', 'hanna@test.com')
const userTwo = new User('john', 'john@test.com')

userOne.incScore().incScore()

console.log(userOne, userTwo)