let firstName = 'jack';
let name = firstName;
firstName = 'hanna';
console.log(name)

let people = ['kate', 'brad', 'josh', 'steve'];
let students = people;
people[0] = 'hanna';
console.log(students)

// stack - string/ boolean/ integer - store in stack so doest affect one another
// heap - object/ array/ function - store in the heap but only store the reference value on the stack, so any changes will affect


let products = ['pen', 'phone', 'camera', 'desk'];
let items = [...products];
items[0] = 'key'
console.log(products)

let user = {
    name: 'jack',
    age: 37,
    email: 'jack@example.com'
}

let student = { ...user };
student.name = 'susan';
console.log(user.name)