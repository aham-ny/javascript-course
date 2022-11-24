const person = {
    firstName: 'jack',
    age: 30,
    favColor: 'green',
}

// equivalent to below
const { favColor, firstName, age } = person;
// let firstName = person.firstName;
// let age = person.age;
// let favColor = person.favColor

console.log(firstName, age, favColor)

const numbers = [7, 4, 6, 2];
const [a, b, , c] = numbers
console.log(c, a, b)